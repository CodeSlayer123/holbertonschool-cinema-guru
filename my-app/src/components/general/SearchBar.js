import React from 'react';
import './general.css';

export default function SearchBar(title, setTitle){
    const hendleInput = (event, onChange) => {
        setTitle(event.target.value)
    }
    return(
        <div>
            <p>{label}</p>
            <input  type="text" placeholder='Search Movies' title={title} setTitle={setTitle} onChange={hendleInput}/>

        </div>
    )

}
