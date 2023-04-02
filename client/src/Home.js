import React from "react";
import { Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./Login";

function Home() {
    return(
        <div className="form-group form-group-sm">
            <Login />
        </div>
    )
}
export default Home;