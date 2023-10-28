import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { useARContext } from './Contexts/ARContext';
// import { useCharacterAnimations } from "../../contexts/CharacterAnimations";

const Interface = forwardRef((props, ref) => {
    //   const { animations, animationIndex, setAnimationIndex } =
    //     useCharacterAnimations();
    const navigate = useNavigate();

    const arViewRef = useARContext();

    const buttonArray = [
        'Button 1',
        'Button 2',
        'Button 3',
        'Button 4',
        'Button 5',
        'Button 6',
        'Button 7',
        'Button 8',
        'Button 9',
        'Button 10'
    ];

    const handleButtonClick = () => {
        // Call the function in ARView from Interface
        if (arViewRef.current) {
            arViewRef.current.invokeFunctionInARView();
        }
    };

    return (
        <div id="overlay-content" ref={ref}>
            <div className="dom-container">
                <div className="nav-container">
                    {/* <button onClick={() => navigate('/')}>BACK</button> */}
                    <button onClick={handleButtonClick}>BACK</button>
                    <button onClick={() => console.log("DEBUG: Nav Button Clicked")}>INFO</button>
                </div>
                <div className="button-container">
                    {/* {animations.map((animation, index) => (
                        <button
                            key={animation}
                            className={`button ${index === animationIndex ? "active" : ""}`}
                            onClick={() => setAnimationIndex(index)}
                        >
                            {animation}
                        </button>
                    ))} */}
                    {buttonArray.map((button, index) => (
                        <button onClick={() => console.log("DEBUG: Button Clicked")} className='select-button' key={index}>{button}</button>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default Interface;
