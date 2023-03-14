import './auth.css';
import { React, useState, useEffect } from 'react';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';


export default function Login(username, password, setUsername, setPassword){

    return(
        <div>
            <Input label="Username" value={username} setValue = {setUsername}/>
            <Input label="Password" value={password} setValue = {setPassword}/>
            <Button label="Submit" classname="Submit"/>
        </div>
    )

}
