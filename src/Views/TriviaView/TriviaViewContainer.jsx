import React, { useState, useEffect, useContext } from 'react';
import questions from '../../../public/trivia/TRIVIA_QUESTIONS.json';
import { BsFillArrowLeftCircleFill as BackArrow } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { AudioContext } from "../../Context/AudioContext";
import { BUTTON_PRESS } from '../../Context/CommonConstants';
import FinalScorePage from './FinalScorePage';
import ProgressBar from './ProgressBar';
import "./TriviaStyles.css";

const TriviaViewContainer = () => {

    const [currentQuestion, setCurrentQuestion] = useState({});
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [correctOption, setCorrectOption] = useState('');
    const [questionNumber, setQuestionNumber] = useState(0);
    const [gameOver, setGameOver] = useState(false); // State variable to track game over
    const { soundEffectsEnabled } = useContext(AudioContext);

    const navigate = useNavigate();

    useEffect(() => {
        selectRandomQuestion();
    }, []); // Run once on initial render

    // Function to randomly select a question
    const selectRandomQuestion = () => {
        if (questionNumber < 10) {
            const randomIndex = Math.floor(Math.random() * questions.length);
            setCurrentQuestion(questions[randomIndex]);
            setSelectedAnswer('');
            setCorrectOption('');
            setFeedback('');
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
            setScore(score + 1);
            setFeedback('Correct!');
            setCorrectOption(selectedAnswer); // Set the correct option
        } else {
            if (score > 0) {
                setScore(score - 1);
            }
            setFeedback(`Incorrect! The correct answer is option ${currentQuestion.answer.toUpperCase()}`);
            setCorrectOption(currentQuestion.answer); // Set the correct option
        }
        setQuestionNumber(questionNumber + 1); // Move to the next question
    };

    const playSound = () => {
        if (soundEffectsEnabled) {
            new Audio(BUTTON_PRESS).play();
        }
    };

    return (
        <div className='trivia-container'>
            <div>
                <button onClick={() => { playSound(); navigate('/'); }} className='back-button'><BackArrow /></button>
            </div>
            <h1>Trivia Quiz</h1>
            {gameOver ? (
                <FinalScorePage score={score} /> // Render the final score page if game over
            ) : (
                <div className='trivia-questions-container'>
                    <h2 className='trivia-score'>Score: {score}</h2>
                    <h3>{currentQuestion.question}</h3>
                    <ul>
                        {currentQuestion.options &&
                            currentQuestion.options.map((option, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => handleAnswerSelection(String.fromCharCode(97 + index))}
                                        className={`selection-button ${selectedAnswer === String.fromCharCode(97 + index) ? 'active-selection' : ''
                                            } ${correctOption === String.fromCharCode(97 + index) ? 'correct-selection' : ''}`}
                                        disabled={feedback !== ''}
                                    >
                                        {String.fromCharCode(65 + index)}: {option} {/* Adding the label A:, B:, C:, D: */}
                                    </button>
                                </li>
                            ))}
                    </ul>
                    {feedback && <p>{feedback}</p>}
                    <div className='action-buttons'>
                        <button onClick={handleSubmit} disabled={!selectedAnswer}>
                            Submit
                        </button>
                        <button onClick={selectRandomQuestion} disabled={!selectedAnswer}>
                            Next
                        </button>
                    </div>
                    <ProgressBar currentQuestionNumber={questionNumber} />
                </div>
            )}
        </div>
    )
}

export default TriviaViewContainer
