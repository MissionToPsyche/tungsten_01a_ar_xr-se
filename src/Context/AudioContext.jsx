import React, { createContext, useState, useEffect } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);//music is not turned on until user turns it on in settings
    const [audio] = useState(new Audio('../public/audio/space_music.mp3'));
    const [soundEffectsEnabled, setSoundEffectsEnabled] = useState(true); //Sounds effects enabled at start, can be turned off in settings

    useEffect(() => {
        audio.loop = true;//Audio file loops for continuous music 
        isMusicPlaying ? audio.play() : audio.pause();//If the music is playing it pauses, if not the music starts
    }, [isMusicPlaying, audio]);

    return (
        <AudioContext.Provider value={{ isMusicPlaying, setIsMusicPlaying, soundEffectsEnabled, setSoundEffectsEnabled }}>
            {children}
        </AudioContext.Provider>
    );
};
