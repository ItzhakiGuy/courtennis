import React, { useState } from "react";
import "./loginPage.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import authenticationService from "../handlers/AuthenticationHandler";

function SignUpPage() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const routerHistory = useHistory();

    const handleRegisterButtonClick = async () => {
        if (!username) {
            alert("Username is missing");
            return;
        } else if (!password) {
            alert("Password is missing.");
            return;
        }

        const signUpResponse = await signUpRequest(username, password);
        if (signUpResponse.status === 200) {
            const response = await authenticationService.login(username, password, false);
            if (authenticationService.isUserLoggedIn()) {
                routerHistory.push("/");
            } else {
                alert(response.message);
            }
        } else {
            alert(signUpResponse.message);
        }
    };

    const cancelClicked = () => {
        routerHistory.push("/login");
    };

    const enteredUsername = (event) => {
        setUsername(event.target.value);
    };

    const enteredPassword = (event) => {
        setPassword(event.target.value);
    };

    const signUpRequest = async (username, password) => {
        let response;
        const body = { username, password };

        try {
            response = await axios.post("/register", body);
        } catch (err) {
            console.log(err);
            return {
                "success": false,
                "message": "Server unreached.",
            }
        }

        return response;
    };

    return (<div className="signUp">
        <div className="signup-container">
            <h3>Sign Up to Courtennis</h3>
            <input type="text" id="username" placeholder="Username" onChange={enteredUsername} />
            <input type="password" id="password" placeholder="Password" onChange={enteredPassword} />
            <button type="button" className="register-button" onClick={handleRegisterButtonClick}>Register</button>
            <button type="button" className="register-cancel" onClick={cancelClicked}>Cancel</button>
        </div>
    </div>);
}

export default SignUpPage;
