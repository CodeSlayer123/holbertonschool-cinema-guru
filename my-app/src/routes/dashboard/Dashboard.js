import './dashboard.css';
import { React, useState, useEffect } from 'react';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './HomePage';
import Favorites from './Favorites';
import WatchLater from './WatchLater';


export default function Dashboard(userUsername, setIsLoggedIn){

    return(
        <BrowserRouter>

            <div>
                <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}/>
                <SideBar />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/watchlater" element={<WatchLater />} />
                    <Route path="/*" element={<Navigate to="/" />} />


                </Routes>


            </div>

        </BrowserRouter>

    )

}
