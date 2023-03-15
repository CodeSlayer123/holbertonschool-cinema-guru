import './movies.css';
import { React, useState, useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import Input from '../general/SelectInput';


export default function Filter(minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle){

    const options = ['latest', 'oldest', 'highestrated', 'lowestrated']
    return(
        <div>
            <SearchBar title= {title} setTitle ={setTitle}/>
            <Input label= 'minYear' type='text' className='minYear' value={minYear} setValue={setMinYear} />
            <Input label= 'maxYear' type='text' className='maxYear' value={maxYear} setValue={setMaxYear} />
            <Select label='Filter' options={options} className='Filter' value={genres} setValue={setGenres}/>

        </div>
    )

}
