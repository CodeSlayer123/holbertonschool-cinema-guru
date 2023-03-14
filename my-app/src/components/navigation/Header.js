import './navigation.css';
import { React, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Header(userUsername, setIsLoggedIn){

    function logout(){
        localStorage.removeItem('accessToken')
        setIsLoggedIn = false

    }
    return(
        <div>
            <nav>
                <img src="https://picsum.photos/100/100"/>
                <p>Welcome {userUsername}!</p>
                <span onClick={logout}>
                    <p>Logout</p>
                    <FontAwesomeIcon icon="fa-sign-out" />

                </span>

            </nav>
        </div>
    )

}
