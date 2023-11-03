import React from 'react'
import './GameInfoPopup.css'

const BusInfoPopup = ({ onClose }) => {
    return (
        <div className="info-popup-overlay">
            <div className="info-popup-container">
                <h2>Bus Info</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt excepturi numquam esse veritatis aperiam commodi rem tempora eaque sunt alias, voluptate, deleniti quos sit distinctio deserunt expedita atque magni culpa amet, cupiditate exercitationem! Doloremque explicabo veniam sunt similique minima. Quod obcaecati eveniet deleniti sit repellat quidem unde, deserunt quia quasi?
                </p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default BusInfoPopup;