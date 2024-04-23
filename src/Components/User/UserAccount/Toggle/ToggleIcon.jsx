import React, { useState } from 'react';
import './Toggle.css';

const ToggleIcon = ({ toggleStatus }) => {
    const [isChecked, setIsChecked] = useState(toggleStatus);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className={`switch ${isChecked ? 'active' : 'inactive'}`}>
            <input type="checkbox" checked={isChecked} onChange={handleToggle} />
            <span className="slider round"></span>
        </label>
    )
}

export default ToggleIcon