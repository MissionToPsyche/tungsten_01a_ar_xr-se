import React from 'react';
import "../TriviaStyles.css";

const FinalScorePage = ({ score }) => {
    return (
        <div className='triva-container'>
            <h2 className='trivia-score'>Final Score: {score}</h2>
        </div>
    );
}

export default FinalScorePage;
