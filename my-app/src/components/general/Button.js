import React from 'react';
import './general.css';

export default function Button(label, className, onClick, icon){
    return(
        <div>
            <button label={label} className={className} onClick={onClick}>{label}</button>
        </div>
    )
}
