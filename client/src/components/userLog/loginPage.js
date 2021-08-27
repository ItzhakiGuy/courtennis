import React, { useState, useEffect } from 'react';
import './loginPage.css';
import authenticationService from "../services/AuthenticationService";

const LoginPage = props => {
    const [username, setEmail] = useState(null),
        [password, setPassword] = useState(null),
        [rememberMe, setRememberMe] = useState(false),
        [isAuthenticated, setIsAutheticated] = useState(null);
    authenticationService.registerForLoginStatusChangedEvent((isUserLoggedIn) =>
        setIsAutheticated(isUserLoggedIn));

    const loginClicked = async () => {
        if (!username) {
            alert("Missing username");
            return;
        } else if (!password) {
            alert("Missing password");
            return;
        }
        if (!usernameValid(username)) {
            if (username !== 'admin') {
                alert("Email address provided is invalid");
                return;
            }
        }
        const response = await authenticationService.login(username, password, rememberMe);
        if (authenticationService.isUserLoggedIn()) {
            props.history.push("/");
        } else {
            alert(response.message);
        }
    };

    const usernameValid = (username) => {
        const validateEmailRegex = /\S+@\S+\.\S+/;
        return validateEmailRegex.test(username);
    };

    const changedEmailAddress = (event) => {
        const username = String(event.target.value).toLowerCase().trim();
        setEmail(username);
    };

    const changedPassword = (event) => {
        setPassword(event.target.value);
    };

    const rememberMeClicked = (event) => {
        setRememberMe(event.target.checked);
    };

    const signUpClicked = (event) => {
        window.location.href = '/signup'
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            loginClicked(event);
        }
    }

    useEffect(() => {
        const loginAttemptWithCookies = async () => {
            await authenticationService.login(null, null, false);
            if (authenticationService.isUserLoggedIn()) {
                props.history.push("/");
            }
        };
        loginAttemptWithCookies()
            .then(res => {
                console.log("Login success with cookies")
            });
    }, []);


    if (isAuthenticated === null) {
        return null;
    } else {
        return <div className="login">
            <div className="site-login-container">
                <img className="login-logo" src={process.env.PUBLIC_URL + "/logo-icon.png"} />
                <input type="text" id='username' placeholder="EMAIL ADDRESS" onChange={changedEmailAddress}
                    onKeyDown={handleKeyDown} />
                <input type="password" id="password" placeholder="PASSWORD" onChange={changedPassword}
                    onKeyDown={handleKeyDown} />
                <label className="checkbox-container">Remember me
                        <input type="checkbox" className="remember-me-checked" checked={rememberMe}
                        onChange={rememberMeClicked}
                        onKeyDown={handleKeyDown} />
                    <span className="checkmark" />
                </label>
                <button type="button" className="login-button" onClick={loginClicked}>LOGIN</button>
                <button type="sign-up" className="signup-button" onClick={signUpClicked}>SIGN UP</button>
            </div>
        </div>;
    }

}

export default LoginPage;
