import React from 'react';
import './general.css';

export default function SelectInput(label, options, className, value, setValue){
    const hendleSelect = (event, onChange ) => {
        setValue(event.target.value)
    }
    return(
        <div>
            <p>{label}</p>
            <select label={label} options={options} className={className} value={value} setValue={setValue} onChange={hendleSelect}>
                {options.map((option) => (<option value={option.value}>{option.label}</option>))}
            </select>
        </div>
    )

}
