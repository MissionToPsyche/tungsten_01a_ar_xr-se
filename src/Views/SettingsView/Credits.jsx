import React from 'react';
import "./Credits.css";

const Credits = ({ onClose }) => {
    return (
        <div className='credits-modal'>
            <h2 className='credits-header'>Credits</h2>
            <p className='credits-info'>
                This work was created in partial fulfillment of Arizona State University Capstone Course 401 & 402. The work is a result of the Psyche Student Collaborations component of NASA’s Psyche Mission (https://psyche.asu.edu).
                “Psyche: A Journey to a Metal World” 01a_ar_xr-se is part of the NASA Discovery Program mission to solar system targets. Trade names and trademarks of ASU and NASA are used in this work for identification only.
                Their usage does not constitute an official endorsement, either expressed or implied, by Arizona State University or National Aeronautics and Space Administration.
                The content is solely the responsibility of the authors and does not necessarily represent the official views of ASU or NASA.
            </p>
            <h3 className='credits-header'>Authors:</h3>
            <p className='credits-info'>
                Edgar Hakobyan - ehakobya@asu.edu<br />
                Mia Harmon - mharmon7@asu.edu<br />
                Sarah Nicolas - senicola@asu.edu
            </p>

            <button className='credits-close-button' onClick={onClose}>CLOSE</button>
        </div>
    );
};

export default Credits;
