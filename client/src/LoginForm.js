import React, { useState, useContext } from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserContext } from "./App";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { user, setUser } = useContext(UserContext)
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => setUser(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  
    return(
        <div>
            {errors ? errors.map(error => <p>error</p>) : null}
        <Form onSubmit={handleSubmit}>
            <Form.Group className="m-3" controlId="email">
                <Form.Label >Username:</Form.Label>
                <Form.Control 
                type="username" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="m-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button className="m-3" variant="primary" type="submit">
                Login
            </Button>
        </Form>
        </div>
    )
}
export default LoginForm;