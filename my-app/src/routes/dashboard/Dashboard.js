import './dashboard.css';
import { React, useState, useEffect } from 'react';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Dashboard(userUsername, setIsLoggedIn){

    return(
        <div>
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}/>
        </div>
    )

}
