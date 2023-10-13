import React, { forwardRef, useRef, useState } from "react";

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

  // const scrollContainerRef = useRef(null);
  // const [isScrolling, setScrolling] = useState(false);
  // const [scrollX, setScrollX] = useState(0);
  // const [startX, setStartX] = useState(0);

  // const handleMouseDown = (e) => {
  //   setScrolling(true);
  //   setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
  //   setScrollX(scrollContainerRef.current.scrollLeft);
  // };

  // const handleMouseUp = () => {
  //   setScrolling(false);
  // };

  // const handleMouseMove = (e) => {
  //   if (!isScrolling) return;
  //   const x = e.pageX - scrollContainerRef.current.offsetLeft;
  //   const walk = (x - startX) * 2;
  //   scrollContainerRef.current.scrollLeft = scrollX - walk;
  // };

  return (
    <div ref={ref}>
      {/* TOP NAVIGATION WITH BUTTONS */}
      <div className="nav-container">

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
