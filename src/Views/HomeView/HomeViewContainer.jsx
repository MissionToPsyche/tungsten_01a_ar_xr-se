import { useNavigate } from "react-router-dom";
import "./HomeView.css";

import { BiLogoTwitter as TwitterIcon, BiLogoInstagramAlt as InstaIcon, BiLogoYoutube as YoutubeIcon } from 'react-icons/bi';
import { ImFacebook as FacebookIcon } from 'react-icons/im';

const HomeViewContainer = () => {

    const navigate = useNavigate();

    const redirectToFacebook = () => {
        window.location.href = 'https://www.facebook.com/MissionToPsyche';
    }
    const redirectToTwitter = () => {
        window.location.href = 'https://twitter.com/MissionToPsyche';
    }
    const redirectToInstagram = () => {
        window.location.href = 'https://www.instagram.com/missiontopsyche/';
    }
    const redirectToYoutube = () => {
        window.location.href = 'https://www.youtube.com/channel/UC2BGcbPW8mxryXnjQcBqk6A';
    }


    return (
        <div className="container">

            <div className="header-section">
                <h2>PSYCHE</h2>
                <h3>AR Experience</h3>
            </div>

            <div className="button-section">
                <button onClick={() => navigate('/ar')} type="button">PLAY</button>
                <button onClick={() => navigate('/help')} type="button">HELP</button>
                <button onClick={() => navigate('/settings')} type="button">SETTINGS</button>
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
