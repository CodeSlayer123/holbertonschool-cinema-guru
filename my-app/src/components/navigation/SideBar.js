import './navigation.css';
import { React, useState, useEffect } from 'react';
import Activity from '../../components/Activity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function SideBar(){
    const [selected, setSelected] = useState("home");
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);
    function setPage(pageName){
        setSelected(pageName)
    }
    useEffect(() =>{
        const accessToken = localStorage.getItem('accessToken')
        axios.get('http://localhost:8000/api/components/activity', {headers: { authorization: `Bearer ${accessToken}` }})
        .then((response) => {
            if (response.data){
                setActivities(response.data)
            }
        }
        )

    })
    return(
        <div>
            <nav>
                <ul>
                    <li onClick={useNavigate('/home')}>Home</li>
                    <li onClick={useNavigate('/favorites')}>Favorites</li>
                    <li onClick={useNavigate('/watchlater')}>Watch Later</li>
                </ul>
                <ul>
                    <Activity />

                </ul>

            </nav>
            

        </div>
    )

}
