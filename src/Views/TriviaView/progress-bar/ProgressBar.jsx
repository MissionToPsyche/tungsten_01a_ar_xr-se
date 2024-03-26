import React from 'react';
import "./ProgressBar.css";

const ProgressBar = ({ currentQuestionNumber }) => {
    const totalQuestions = 10; // Total number of questions

    // Calculate the progress percentage
    const progress = (currentQuestionNumber / totalQuestions) * 100;

    return (
        <div className='progress-bar-container'>
            <div className='progress-bar'>
                <div className='progress' style={{ width: `${progress}%` }}></div>
            </div>
        </div>

    );
}

export default ProgressBar;
