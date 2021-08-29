import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./navigation.css"
import authenticationService from "../services/AuthenticationService.js";
import {useHistory} from "react-router-dom";
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';
import BlurOnTwoToneIcon from '@material-ui/icons/BlurOnTwoTone';

import Fab from '@material-ui/core/Fab';

export const Navigation = () => {

    const [, setIsVisible] = useState(false);
    const routerHistory = useHistory();

    authenticationService.registerForLoginStatusChangedEvent((isUserLoggedIn) => setIsVisible(isUserLoggedIn));

    const handleLogout = () => {
        authenticationService.logout();
        routerHistory.push("/login");
    };

    const handleLogoClick = () => {
        routerHistory.push("/");
    };

    return (
        <nav className="navigation" style={{display: 'flex'}}>
            <img className='store-logo' onClick={handleLogoClick}
                 src={process.env.PUBLIC_URL + '/courtennis-logo.png'}
                 alt="store-logo" />
            <ul className="navigation-links">
                <Fab variant="extended">
                    <Link to="/">
                        <BlurOnTwoToneIcon />
                        Browse
                    </Link>
                </Fab>

                <Fab variant="extended">
                    <Link to="/contactus">
                        <ContactMailTwoToneIcon />
                        Contact Us
                    </Link>
                </Fab>

                <Fab variant="extended">
                    <Link to="/aboutus">
                       <InfoTwoToneIcon />
                        About Us
                    </Link>
                </Fab>

                <Fab variant="extended">
                    <Link to="/cart">
                    <ShoppingCartTwoToneIcon />
                    Cart
                </Link>
                </Fab>
            
                {authenticationService.isUserAdmin() && 
                <Fab variant="extended" className={"admin-link"}>
                    <Link to="/admin">
                        <SupervisorAccountIcon />
                        Admin
                    </Link>
                </Fab>}
                <Fab variant="extended">
                    <Link to="/readme.html">
                        Readme
                    </Link>
                </Fab>
                <Fab variant="extended">
                    <Link className="logout-button" onClick={handleLogout}>
                        <ExitToAppTwoToneIcon />
                        Logout
                    </Link>
                </Fab>
            </ul>
        </nav>
    )
};

export default Navigation;