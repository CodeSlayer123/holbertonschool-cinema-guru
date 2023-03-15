import './App.css';
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Authentication from "./routes/auth/Authentication";
import Dashboard from "./routes/dashboard/Dashboard";

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    axios.post(process.env.AUTH, {}, {headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }})
  })

  return (
    <div className="App">
      {IsLoggedIn ? <Dashboard/>  : <Authentication/> }
      <header className="App-header">
        <p>test</p>
      </header>
    </div>
  );
}

export default App;
