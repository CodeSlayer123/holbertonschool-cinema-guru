import './auth.css';
import { React, useState, useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import axios from 'axios';


export default function Authentication(setIsLoggedIn, setUserUsername){

    const [_switch, setSwitch] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(false);
    const handleSwitch = (value) => {
        setSwitch(value)
        setUserUsername('')
        setPassword('')
    }
    function handleSubmit(event){
        event.preventDefault()
        if (_switch == true){
            axios.post('http://localhost:8000/api/auth/login', {username, password})
            .then(response => {
                if (response.data.accessToken){
                    localStorage.setItem("accessToken", response.data.accessToken)
                    setUserUsername(username)
                    setIsLoggedIn(true) 
                }
            })
        }
        if (_switch == false){
            axios.post('http://localhost:8000/api/auth/register', {username, password})
            .then(response => {
                if (response.data.accessToken){
                    localStorage.setItem("accessToken", response.data.accessToken)
                    setUserUsername(username)
                    setIsLoggedIn(true) 
                }
            })
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <button onClick={handleSwitch(true)}>Sign In</button>
                <button onClick={handleSwitch(false)}>Sign Up</button>
            </form>
            {_switch ?
            <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword}/>
            :
            <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword}/> }

        </div>
    )

}
