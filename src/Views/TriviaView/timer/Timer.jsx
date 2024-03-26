import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = ({ initialTime, onTimeout }) => {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        setTime(initialTime); // Update time when initialTime changes
    }, [initialTime]);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(timerId);
                    if (onTimeout) {
                        onTimeout();
                    }
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, [onTimeout]);

    return (
        <div className="timer-container">
            <div className="timer">
                {time}
            </div>
        </div>
    );
};

export default Timer;
