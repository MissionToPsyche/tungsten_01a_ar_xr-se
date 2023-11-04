import React from 'react'
import './InfoPopupStyles.css'
import { AiFillCodeSandboxSquare as BusIcon } from 'react-icons/ai';


const BusInfoPopup = ({ onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <BusIcon className='component-icon' />
                <h2 className='popup-header'>Spacecraft Bus</h2>
                <p className='popup-descroption'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt excepturi numquam esse veritatis aperiam commodi rem tempora eaque sunt alias, voluptate, deleniti quos sit distinctio deserunt expedita atque magni culpa amet, cupiditate exercitationem! Doloremque explicabo veniam sunt similique minima. Quod obcaecati eveniet deleniti sit repellat quidem unde, deserunt quia quasi?
                </p>
                <button className='popup-close-btn' onClick={onClose}>CONTINUE</button>
            </div>
        </div>


    );
}

export default BusInfoPopup;