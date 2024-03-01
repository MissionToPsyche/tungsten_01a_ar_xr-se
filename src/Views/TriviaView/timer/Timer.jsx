import React, { useState, useEffect } from 'react';
import "../progress-bar/ProgressBar.css";

const Timer = ({ currentQuestionNumber }) => {
    const totalQuestions = 10; // Total number of questions
    const totalTime = 30; // Total time for each question in seconds
    const [timeLeft, setTimeLeft] = useState(totalTime);

    // Calculate the progress percentage
    const progress = (currentQuestionNumber / totalQuestions) * 100;

    useEffect(() => {
        // Reset timer on question change
        setTimeLeft(totalTime);
    }, [currentQuestionNumber]);

    useEffect(() => {
        // Update timer every second
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime === 0) {
                    // Time's up, do something here (e.g., move to the next question)
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        // Clear timer on component unmount or when question number changes
        return () => clearInterval(timer);
    }, [currentQuestionNumber]);

    return (
        <div className='progress-bar-container'>
            <div className='timer-bar'>
                <div className='time-left' style={{ width: `${(timeLeft / totalTime) * 100}%` }}></div>
            </div>
            <div className='progress-bar'>
                <div className='progress' style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
}

export default Timer;
