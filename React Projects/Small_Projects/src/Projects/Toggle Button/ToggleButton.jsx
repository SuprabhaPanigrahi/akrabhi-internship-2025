import { useState } from 'react';
import './ToggleButton.css';


export const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggleClick = () => {
        setIsOn(!isOn);
    }

    return (
        <div className='toggle-parent' >
            <div className={`toggle-container ${isOn ? 'on' : 'off'}`} onClick={handleToggleClick}>
                <div className="toggle-switch">
                    <span className="toggle-text">{isOn ? "ON" : "OFF"}</span>
                </div>
            </div>
        </div>
    );
};
