import React from "react";
import { useState } from "react";
import { Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Login() {
    const [showLogin, setShowLogin] = useState(true)

    function toggleShowLogin() {
        setShowLogin(!showLogin)
    }
    return(
        <Card className="w-50 position-absolute top-50 start-50 translate-middle">
            <Card.Title>
               <h1 className="m-3">Please Login or Signup:</h1>
            </Card.Title>
            <Card.Body>
            
            <div className="d-flex justify-content-center">
                {showLogin ? (
                    <Card>
                        <Card.Body>
                            <LoginForm />
                        </Card.Body>
                        <Card.Footer>
                            <p>
                                Don't have an account? 
                                <br></br>
                                <Button onClick={toggleShowLogin}>Signup</Button>
                            </p>
                        </Card.Footer>
                    </Card>
                    ) : (
                     <Card>
                        <Card.Body>
                            <SignupForm />
                        </Card.Body>
                        <Card.Footer>
                            <p>
                                Already have an account? 
                                <br></br>
                                <Button onClick={toggleShowLogin}>Login</Button>
                            </p>
                        </Card.Footer>
                    </Card>
                    ) }
            </div>
            </Card.Body>
        </Card>
    )
}
export default Login;