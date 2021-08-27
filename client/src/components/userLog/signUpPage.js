import React, { useState } from "react";
import "./loginPage.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { validateEmail} from "../../utils/utils";
import { validatePassword } from "../../utils/utils";

function SignUpPage() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [password_val, setPasswordVal] = useState(null);
    const routerHistory = useHistory();

    const handleSignUpButtonClick = async () => {
        if (!email) {
            alert("Email is missing");
            return;
        } else if (!password) {
            alert("Password is missing.");
            return;
        } else if (!firstName) {
            alert("First name is missing.");
            return;
        } else if (!lastName) {
            alert("LAst name is missing.");
            return;
        }

        if (!validatePassword(password)) {
            alert("A qualified password must be at least 8 characters and composed of \n" +
                "1 lowercase letter\n 1 uppercase letter\n 1 number\n 1 special character\n");
            return;
        }

        if (password !== password_val) {
            alert("The validation password doesn't match the password you entered");
            return;
        }

        if (!validateEmail(email)) {
            alert("The email address provided is invalid");
            return;
        }

        const signUpResponse = await signUpRequest(firstName, lastName, email, password);
        if (signUpResponse.success) {
            routerHistory.push("/login");
        } else {
            alert(signUpResponse.message);
        }
    };

    const cancelClicked = () => {
        routerHistory.push("/login");
    };

    const emailEntered = (event) => {
        const email = String(event.target.value).toLowerCase().trim();
        setEmail(email);
    };

    const passwordEntered = (event) => {
        setPassword(event.target.value);
    };

    const validationPasswordEntered = (event) => {
        setPasswordVal(event.target.value);
    };

    const firstNameEntered = (event) => {
        setFirstName(event.target.value);
    };

    const lastNameEntered = (event) => {
        setLastName(event.target.value);
    };

    const signUpRequest = async (firstName, lastName, email, password) => {
        let response;
        const body = { firstName, lastName, email, password };

        try {
            response = await axios.post("/api/signup", body);
        } catch (err) {
            console.log(err);
            return {
                "success": false,
                "message": "Server unreached.",
            }
        }

        return response.data;
    };

    return (<div className="signUp">
        <div className="signup-container">
            <h3>Sign Up to ALKU Jewelry</h3>
            <input type="text" id="text" placeholder="First Name" onChange={firstNameEntered} />
            <input type="text" id="text" placeholder="Last Name" onChange={lastNameEntered} />
            <input type="text" id="email" placeholder="Email address" onChange={emailEntered} />
            <input type="password" id="password" placeholder="Password" onChange={passwordEntered} />
            <input type="password" id="password_re" placeholder="Re enter your password" onChange={validationPasswordEntered} />
            <button type="button" className="signup-button" onClick={handleSignUpButtonClick}>Sign Up</button>
            <button type="button" className="signup-cancel" onClick={cancelClicked}>Cancel</button>
        </div>
    </div>);
}

export default SignUpPage;
