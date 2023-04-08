import './App.css';
import React from 'react';
// import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'
import Home from './Home';
// import NavBar from './NavBar';
import Login from './Login';
export const UserContext = React.createContext();



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
      {/* <NavBar  /> */}
      { user === null ? <Login /> : <Home />}
      </UserContext.Provider>
    </div>
  );
}

export default App;
