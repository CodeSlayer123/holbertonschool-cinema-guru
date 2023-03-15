import './movies.css';
import { React, useState, useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import Input from '../general/SelectInput';


export default function MovieCard(movie){

    const [isFavorite, setIsFavorite] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);
    useEffect(() =>{
        const accessToken = localStorage.getItem('accessToken')
        axios.get('http://localhost:8000/api/titles/favorite/')
        axios.get('http://localhost:8000/api/titles/watchlater/')

    })
    function handleClick(type){
        if (type == 'favorite'){
            setIsFavorite(movie)
        }
        if (type == 'watchlater'){
            setIsWatchLater(movie)
        }
    }
    return(
        <div>
            <li onClick={handleClick('favorite')}>Add to favorites</li>
            <li onClick={handleClick('watchlater')}>Add to watchlater</li>
        </div>
    )

}
