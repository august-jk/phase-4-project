import React, { useState, useContext } from "react";
import { Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserContext } from "./App";

function SignupForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { user, setUser } = useContext(UserContext)
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, passwordConfirmation }),
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
            <Form.Group className="m-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Confirm Password" 
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
            </Form.Group>
            <Button className="m-3" variant="primary" type="submit">
                Signup
            </Button>
        </Form>
    )
}
export default SignupForm;