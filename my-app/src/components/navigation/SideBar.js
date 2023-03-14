import './navigation.css';
import { React, useState, useEffect } from 'react';
import Header from '../../components/navigation/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";


export default function SideBar(){
    const [selected, setSelected] = useState("home");
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);
    function setPage(pageName){
        setSelected(pageName)
    }
    useEffect(() =>{
        
    })
    return(
        <div>
            <li onClick={useNavigate('/home')}>Home</li>
            <li onClick={useNavigate('/favorites')}>Favorites</li>
            <li onClick={useNavigate('/watchlater')}>Watch Later</li>

        </div>
    )

}
