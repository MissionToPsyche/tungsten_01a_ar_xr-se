import React from 'react';
import { BUTTON_PRESS } from '../../../Context/CommonConstants';
import { BsFillArrowLeftCircleFill as BackArrow } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import "./DifficultySelection.css";

const DifficultySelection = ({ startGame }) => {
    const playSound = () => {
        new Audio(BUTTON_PRESS).play();
    };

    const navigate = useNavigate();

    return (
        <div className='difficulty-container'>
            <div>
                <button onClick={() => { playSound(); navigate('/'); }} className='back-button'><BackArrow /></button>
            </div>
            <h1 className='trivia-title'>Choose Difficulty</h1>
            <div className='difficulty-choice-container'>
                <button onClick={() => { playSound(); startGame('easy'); }}>Easy</button>
                <button onClick={() => { playSound(); startGame('medium'); }}>Medium</button>
                <button onClick={() => { playSound(); startGame('hard'); }}>Hard</button>
            </div>
        </div>
    );
}

export default DifficultySelection;
