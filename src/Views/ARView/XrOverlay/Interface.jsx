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
    <div
      className="bottom-fixed-section"
      ref={ref}
    >
      <div className="button-container">
        {buttonArray.map((button, index) => (
          <button className='select-button' key={index}>{button}</button>
        ))}
      </div>
    </div>
  );
});

export default OverlayInterface;
