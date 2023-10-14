import React, { forwardRef, useRef, useState } from "react";
import { BsArrowLeftCircleFill as BackButton, BsInfoCircleFill as InfoButton } from "react-icons/Bs";

const OverlayInterface = forwardRef((props, ref) => {

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

  return (
    <div className="overlay-container" ref={ref}>

      {/* TOP NAVIGATION WITH BUTTONS */}
      <div className="nav-container">
        {/* <button className="left-button"></button> */}
        <BackButton className="nav-button" />
        <InfoButton className="nav-button" />
      </div>

      {/* MIDDLE SECTION CONTAINING THE AR SCREEN */}
      <div className="ar-container">
        <div className="border-inset">
        </div>
      </div>

      {/* BOTTOM SECTION CONTAINING THE SELECTABLE OBJECTS */}
      <div className="bottom-fixed-section">
        <div className="button-container">
          {buttonArray.map((button, index) => (
            <button className='select-button' key={index}>{button}</button>
          ))}
        </div>
      </div>

    </div>
  );
});

export default OverlayInterface;
