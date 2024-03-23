import { useNavigate } from "react-router-dom";
import { useContext } from 'react'; // Import useContext
import "./HomeView.css";

import { BiLogoTwitter as TwitterIcon, BiLogoInstagramAlt as InstaIcon, BiLogoYoutube as YoutubeIcon } from 'react-icons/bi';
import { ImFacebook as FacebookIcon } from 'react-icons/im';
import { AudioContext } from '../../Context/AudioContext';
import { BUTTON_PRESS } from '../../Context/CommonConstants';

const HomeViewContainer = () => {
    const { soundEffectsEnabled } = useContext(AudioContext);
    const navigate = useNavigate();

    const playSound = () => {
        if (soundEffectsEnabled) {
            new Audio(BUTTON_PRESS).play(); 
        }
    };

    const redirectToFacebook = () => {
        playSound();
        window.location.href = 'https://www.facebook.com/MissionToPsyche';
    }
    const redirectToTwitter = () => {
        playSound();
        window.location.href = 'https://twitter.com/MissionToPsyche';
    }
    const redirectToInstagram = () => {
        playSound();
        window.location.href = 'https://www.instagram.com/missiontopsyche/';
    }
    const redirectToYoutube = () => {
        playSound();
        window.location.href = 'https://www.youtube.com/channel/UC2BGcbPW8mxryXnjQcBqk6A';
    }

    return (
        <div className="container">
            <div className="header-section">
                <h2>PSYCHEE</h2>
                <h3>Beyond Reality</h3>
            </div>

            <div className="button-section">
                <button onClick={() => { playSound(); navigate('/ar'); }} type="button">PLAY</button>
                <button onClick={() => { playSound(); navigate('/trivia'); }} type="button">TRIVIA</button>
                <button onClick={() => { playSound(); navigate('/help'); }} type="button">HELP</button>
                <button onClick={() => { playSound(); navigate('/settings'); }} type="button">SETTINGS</button>
            </div>

            <div className="links-section">
                <div className="social-icon" onClick={redirectToFacebook}>
                    <FacebookIcon className="icon" />
                </div>
                <div className="social-icon" onClick={redirectToTwitter}>
                    <TwitterIcon className="icon" />
                </div>
                <div className="social-icon" onClick={redirectToInstagram}>
                    <InstaIcon className="icon" />
                </div>
                <div className="social-icon" onClick={redirectToYoutube}>
                    <YoutubeIcon className="icon" />
                </div>
            </div>
        </div>
    );
};

export default HomeViewContainer;
