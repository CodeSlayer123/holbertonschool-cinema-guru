import React from 'react';
import './general.css';

export default function Input(label, type, className, value, setValue, icon, inputAttributes){

    const handleInput = (event, onChange ) => {
        setValue(event.target.value)
    }
    return(
        <div>
            <p>{label}</p>
            <input label={label} type={type} className={className} value={value} setValue={setValue} onChange={handleInput}/>
        </div>
    )

}
