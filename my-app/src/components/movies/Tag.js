import './movies.css';
import { React, useState, useEffect } from 'react';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './HomePage';
import Favorites from './Favorites';
import WatchLater from './WatchLater';


export default function Tag(genre, filter, genres, setGenres){
    const [selected, setSelected] = useState(false);
    const handleTag = (value) => {
        if (selected == true){
            setGenres(genre=false)
        } else{
            setGenres(genre=true)
        }
    }

    return(

            <div>
                <li onClick={handleTag}>{genre}</li>
            </div>


    )

}
