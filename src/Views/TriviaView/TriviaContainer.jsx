import React, { useState, useEffect, useContext } from 'react';
import { BsFillArrowLeftCircleFill as BackArrow } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { AudioContext } from "../../Context/AudioContext";
import { BUTTON_PRESS } from '../../Context/CommonConstants';
import FinalScorePage from './final-score/FinalScorePage';
import ProgressBar from './progress-bar/ProgressBar';
import DifficultySelection from './difficulty-selection/DifficultySelection';
import questions from '../../../public/trivia/TRIVIA_QUESTIONS.json';
import "./TriviaStyles.css";
import Timer from './timer/Timer';

const TriviaContainer = () => {

    const TIMER_DURATION = 5; // Define timer duration as a constant variable

    const [difficulty, setDifficulty] = useState('');
    const [gameStarted, setGameStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [correctOption, setCorrectOption] = useState('');
    const [questionNumber, setQuestionNumber] = useState(0);
    const [gameOver, setGameOver] = useState(false); // State variable to track game over
    const { soundEffectsEnabled } = useContext(AudioContext);
    const [timerDuration, setTimerDuration] = useState(TIMER_DURATION); // Timer duration state variable
    const [streakCount, setStreakCount] = useState(0); // Optional streak count

    const navigate = useNavigate();

    useEffect(() => {
        selectRandomQuestion();
    }, []);

    useEffect(() => {
        let intervalId;
        if (gameStarted && timerDuration > 0) {
            intervalId = setInterval(() => {
                setTimerDuration(prevDuration => prevDuration - 1);
            }, 1000); // Run every second
        } else if (timerDuration === 0) {
            handleTimeout();
        }
        return () => clearInterval(intervalId);
    }, [gameStarted, timerDuration]);

    const handleTimeout = () => {
        if (selectedAnswer === '') {
            setFeedback('Time is up! The correct answer is option ' + currentQuestion.answer.toUpperCase());
            setCorrectOption(currentQuestion.answer);
            setQuestionNumber(questionNumber + 1); // Move to the next question
            selectRandomQuestion(); // Automatically move to the next question
        }
    };

    // Function to randomly select a question
    const selectRandomQuestion = () => {
        if (questionNumber < 10) {
            const randomIndex = Math.floor(Math.random() * questions.length);
            setCurrentQuestion(questions[randomIndex]);
            setSelectedAnswer('');
            setCorrectOption('');
            setFeedback('');
            setTimerDuration(TIMER_DURATION); // Reset timer duration
        } else {
            // Game ends after 10 questions
            setGameOver(true);
        }
    };

    // Function to handle answer selection
    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
    };

    // Function to handle submission of selected answer
    const handleSubmit = () => {
        if (selectedAnswer === currentQuestion.answer) {
            let bonusPoints = 0;
            if (difficulty === 'medium' || difficulty === 'hard') {
                bonusPoints = Math.ceil(timerDuration / 2); // Calculate bonus points based on remaining time
                setScore(score + 30 + bonusPoints); // +30 base points plus bonus points
            } else {
                setScore(score + 1); // +1 point for correct answer in other modes
            }
            setFeedback('Correct!');
            setCorrectOption(selectedAnswer);
            setStreakCount(streakCount + 1); // Increment streak count
        } else {
            if (difficulty === 'medium' || difficulty === 'hard') {
                setScore(Math.max(score - 30, 0)); // -30 points for incorrect answer, no negative score
            } else {
                if (score > 0) {
                    setScore(score - 1); // -1 point for incorrect answer in other modes, no negative score
                }
            }
            setFeedback(`Incorrect! The correct answer is option ${currentQuestion.answer.toUpperCase()}`);
            setCorrectOption(currentQuestion.answer);
            setStreakCount(0); // Reset streak count
        }
        setQuestionNumber(questionNumber + 1); // Move to the next question
        setTimerDuration(TIMER_DURATION); // Reset timer duration
        // Check for streak bonus
        if ((difficulty === 'medium' || difficulty === 'hard') && streakCount === 5) {
            setScore(score + 20); // +20 bonus points for streak
            setStreakCount(0); // Reset streak count
        }
        // Introduce a delay before selecting the next question
        setTimeout(() => {
            selectRandomQuestion(); // Select the next question
        }, 1000); // Adjust the delay time as needed (in milliseconds)
    };

    const playSound = () => {
        if (soundEffectsEnabled) {
            new Audio(BUTTON_PRESS).play();
        }
    };

    const startGame = (selectedDifficulty) => {
        setDifficulty(selectedDifficulty);
        setGameStarted(true);
    };

    if (!gameStarted) {
        return <DifficultySelection startGame={startGame} />;
    }

    return (
        <div className='trivia-container'>
            <div>
                <button onClick={() => { playSound(); navigate('/'); }} className='back-button'><BackArrow /></button>
            </div>
            <h1 className='trivia-title'>Trivia Quiz</h1>
            {gameOver ? (
                <FinalScorePage score={score} /> // Render the final score page if game over
            ) : (
                <div>
                    <h2 className='trivia-score'>Score: {score}</h2>
                    <div className='trivia-question-container'>
                        <h3 className='trivia-question'>{currentQuestion.question}</h3>
                    </div>
                    <ul className='trivia-answer-choice'>
                        {currentQuestion.options &&
                            currentQuestion.options.map((option, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => handleAnswerSelection(String.fromCharCode(97 + index))}
                                        className={`selection-button default-selection ${selectedAnswer === String.fromCharCode(97 + index) ? 'active-selection' : ''
                                            } ${correctOption === String.fromCharCode(97 + index) ? 'correct-selection' : ''}`}
                                        disabled={feedback !== ''}
                                    >
                                        {String.fromCharCode(65 + index)}: {option} {/* Adding the label A:, B:, C:, D: */}
                                    </button>
                                </li>
                            ))}
                    </ul>
                    {feedback && <p className='trivia-feedback'>{feedback}</p>}
                    <div className='action-buttons-container'>
                        <button className='action-button' onClick={handleSubmit} disabled={!selectedAnswer}>
                            Submit
                        </button>
                        <button className='action-button' onClick={selectRandomQuestion}>
                            {selectedAnswer ? "Next" : "Skip"}
                        </button>
                    </div>
                    <ProgressBar currentQuestionNumber={questionNumber} />
                    <Timer initialTime={timerDuration} onTimeout={handleTimeout} />
                </div>
            )}
        </div>
    )
}

export default TriviaContainer;
