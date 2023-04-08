import React, { useContext } from "react";
import { Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserContext } from "./App";


function Home() {
    const { user, setUser } = useContext(UserContext)
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
    return(
        <div className="form-group form-group-sm">
            <h1>This is the home screen</h1>
            <button onClick={handleLogoutClick}>Logout</button>
        </div>
    )
}
export default Home;