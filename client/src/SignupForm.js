import React from "react";
import { Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function SignupForm() {
    return(
        <Form>
            <Form.Group className="m-3" controlId="email">
                <Form.Label >Username:</Form.Label>
                <Form.Control type="username" placeholder="Username" />
            </Form.Group>
            <Form.Group className="m-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="m-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Button className="m-3" variant="primary" type="submit">
                Signup
            </Button>
        </Form>
    )
}
export default SignupForm;