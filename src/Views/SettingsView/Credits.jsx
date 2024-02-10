import "./Credits.css";
import React, { useState, useContext } from 'react';
import { AudioContext } from '../../Context/AudioContext'; 
import { BUTTON_PRESS } from '../../Context/CommonConstants';

const Credits = ({ onClose }) => {

    const { soundEffectsEnabled } = useContext(AudioContext);

    const playSound = () => {
        if (soundEffectsEnabled) {
            new Audio(BUTTON_PRESS).play();
        }
    };

    const handleClose = () => {
        playSound();
        onClose();
    };

    return (
        <div className='credits-modal'>

            <h2 className='credits-header'>Authors</h2>
            <div className='info'>
            <p className='credits-info'>
                Edgar Hakobyan - ehakobya@asu.edu<br />
                Mia Palmer - mharmon7@asu.edu<br />
                Sarah Nicolas - senicola@asu.edu
            </p>
            </div>
            
            <h2 className='credits-header'>Audio</h2>
            <div className = 'info'>
                <p className='credits-info'>
                    Music: <a href="https://pixabay.com/music/upbeat-space-chillout-14194/" target="_blank" rel="noopener noreferrer">Space Chillout</a><br />
                    Producer: penguinmusic<br />
                    Source: Pixabay Music<br />
                    <br />
                    Sound Effects: <a href="https://www.zapsplat.com/music/ui-button-click-1/ " target="_blank" rel="noopener noreferrer">UI Button Click 1</a><br />
                    Producer: ZapSplat<br />
                    Attribute : Sound effects obtained from https://www.zapsplat.com<br />
                    <br />
                    Space Background Image: <a href="https://www.istockphoto.com/photo/360-degree-space-nebula-panorama-equirectangular-projection-environment-map-hdri-gm1363877988-435277415?phrase=360+space+panorama">360 Outer Space Background</a><br/>
                    Source: iStock
                </p>
            </div>
            
            <h2 className='credits-header'>Credits</h2>
            <div className='info'>
            <p className='credits-info'>
                This work was created in partial fulfillment of Arizona State University Capstone Course 401 & 402. The work is a result of the Psyche Student Collaborations component of NASA’s Psyche Mission (https://psyche.asu.edu).
                “Psyche: A Journey to a Metal World” 01a_ar_xr-se is part of the NASA Discovery Program mission to solar system targets. Trade names and trademarks of ASU and NASA are used in this work for identification only.
                Their usage does not constitute an official endorsement, either expressed or implied, by Arizona State University or National Aeronautics and Space Administration.
                The content is solely the responsibility of the authors and does not necessarily represent the official views of ASU or NASA.
            </p>
            </div>
            <button className='credits-close-button' onClick={handleClose}>CLOSE</button>
        </div>
    );
};

export default Credits;

