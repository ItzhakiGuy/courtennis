import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./navbar.css"
import authenticationService from "../services/AuthenticationService.js";
import {useHistory} from "react-router-dom";
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';
import BlurOnTwoToneIcon from '@material-ui/icons/BlurOnTwoTone';
import FeaturedPlayListTwoToneIcon from '@material-ui/icons/FeaturedPlayListTwoTone';

import Fab from '@material-ui/core/Fab';
import { blueGrey, lightBlue, lightGreen } from "@material-ui/core/colors";

export const Navbar = () => {

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
        <nav className="navbar">
            <img className='store-logo' onClick={handleLogoClick}
                 src={process.env.PUBLIC_URL + '/courtennis-logo.png'}
                 alt="store-logo" />
            <ul className="navbar-links">
                <Link to="/">
                    <Fab variant="extended">
                        <BlurOnTwoToneIcon />
                        Browse
                    </Fab>
                </Link>

                <Link to="/contactus">
                    <Fab variant="extended">
                        <ContactMailTwoToneIcon />
                        Contact Us
                    </Fab>
                    </Link>
                
                <Link to="/aboutus">
                    <Fab variant="extended">
                        <InfoTwoToneIcon />
                        About Us
                    </Fab>
                </Link>

                <Link to="/cart">
                    <Fab variant="extended">
                        <ShoppingCartTwoToneIcon />
                        Cart
                    </Fab>
                    
                </Link>

                <Link to="/readme.html">
                    <Fab variant="extended">
                        <FeaturedPlayListTwoToneIcon />
                        Readme
                    </Fab>
                </Link>

                {authenticationService.isUserAdmin() &&  
                    <Link to="/admin">
                        <Fab variant="extended" className={"admin-link"} color="primary" >
                            <SupervisorAccountIcon />
                            Admin
                        </Fab>
                    </Link>
                }
                <Link className="logout-button" onClick={handleLogout}>
                    <Fab variant="extended">
                        <ExitToAppTwoToneIcon />
                        Logout
                    </Fab>
                </Link>
            </ul>
        </nav>
    )
};

export default Navbar;