import React, { createContext, useState, useEffect } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [audio] = useState(new Audio('../public/audio/space_music.mp3'));

    useEffect(() => {
        audio.loop = true;
        isMusicPlaying ? audio.play() : audio.pause();
    }, [isMusicPlaying, audio]);

    return (
        <AudioContext.Provider value={{ isMusicPlaying, setIsMusicPlaying }}>
            {children}
        </AudioContext.Provider>
    );
};
