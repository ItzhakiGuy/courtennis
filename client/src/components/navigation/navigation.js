import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./navigation.css"
import authenticationService from "../services/AuthenticationService.js";
import {useHistory} from "react-router-dom";
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

export const Navigation = () => {

    const [isVisible, setIsVisible] = useState(false);
    const routerHistory = useHistory();

    authenticationService.registerForLoginStatusChangedEvent((isUserLoggedIn) => setIsVisible(isUserLoggedIn));

    const handleLogout = () => {
        authenticationService.logout();
        routerHistory.push("/login");
    };

    const handleLogoClick = () => {
        routerHistory.push("/");
    };

    if (authenticationService.isUserAdmin()) {
        if (isVisible) {
            return (
                <nav className="navigation" style={{display: 'flex'}}>
                    <img className='store-logo' onClick={handleLogoClick}
                         src={process.env.PUBLIC_URL + '/courtennis-logo.png'}
                         alt="store-logo"/>
                    <ul className="navigation-links">
                        <div>
                            <Link to="/">
                                <img src={process.env.PUBLIC_URL + './LEE_icons/store-icon.svg'}
                                     className="navigation-logo"
                                     alt="nav-logo"/>
                                Our Jewelry
                            </Link>
                        </div>

                        <div>
                            <Link to="/contactus">
                                <img src={process.env.PUBLIC_URL + './LEE_icons/contact-us-icon.svg'}
                                     className="navigation-logo sale-animation"
                                     alt="contact-icon"/>
                                Contact Us
                            </Link>
                        </div>

                        <div>
                            <Link to="/aboutus">
                                <img src={process.env.PUBLIC_URL + './LEE_icons/about-us-icon.svg'} className="navigation-logo"
                                     alt="orders-icon"/>
                                About Us
                            </Link>
                        </div>

                        <div><Link to="/cart">
                            <ShoppingCartTwoToneIcon />
                            Cart
                        </Link>
                        </div>

                        <div className={"admin-link"}>
                            <Link to="/admin">
                                <img src={process.env.PUBLIC_URL + './LEE_icons/admin-icon.svg'} className="navigation-logo"
                                     alt="admin-icon"/>
                                Admin</Link>
                        </div>

                        <div>
                            <Link className="logout-button" onClick={handleLogout}>
                                Logout
                            </Link>
                        </div>

                    </ul>
                </nav>
            );
        } else {
            return (
                <nav className="navigation" style={{display: 'flex'}}>
                    <img className='store-logo' onClick={handleLogoClick}
                         src={process.env.PUBLIC_URL + '/courtennis-logo.png'}
                         alt="store-logo"/>
                    <ul className="navigation-links">
                        <div>
                            <Link to="/">
                                <img src={process.env.PUBLIC_URL + './LEE_icons/store-icon.svg'}
                                     className="navigation-logo"
                                     alt="nav-logo"/>
                                Our Jewelry
                            </Link>
                        </div>

                        <div>
                            <Link to="/contactus">
                                <img src={process.env.PUBLIC_URL + './LEE_icons/contact-us-icon.svg'}
                                     className="navigation-logo sale-animation"
                                     alt="contact-icon"/>
                                Contact Us
                            </Link>
                        </div>

                        <div>
                            <Link to="/aboutus">
                                <img src={process.env.PUBLIC_URL + './LEE_icons/about-us-icon.svg'} className="navigation-logo"
                                     alt="orders-icon"/>
                                About Us
                            </Link>
                        </div>

                        <div><Link to="/cart">
                            <ShoppingCartTwoToneIcon />
                            Cart
                        </Link>
                        </div>

                        <div className={"admin-link"}>
                            <Link to="/admin">
                                <img src={process.env.PUBLIC_URL + './LEE_icons/admin-icon.svg'} className="navigation-logo"
                                     alt="admin-icon"/>
                                Admin</Link>
                        </div>

                        <div>
                            <Link className="logout-button" onClick={handleLogout}>
                                Logout
                            </Link>
                        </div>

                    </ul>
                </nav>
            );
        }
    } else {
        if (isVisible) {
            return (
                <nav className="navigation" style={{display: 'flex'}}>
                    <img className='store-logo' onClick={handleLogoClick}
                         src={process.env.PUBLIC_URL + '/courtennis-logo.png'}
                         alt="store-logo"/>
                    <ul className="navigation-links">
                        <div>
                            <Link to="/">
                                <img src={process.env.PUBLIC_URL + './LEE_icons/store-icon.svg'}
                                     className="navigation-logo"
                                     alt="nav-logo"/>
                                Our Jewelry
                            </Link>
                        </div>

                        <div>
                            <Link to="/contactus">
                                <img src={process.env.PUBLIC_URL + './LEE_icons/contact-us-icon.svg'}
                                     className="navigation-logo sale-animation"
                                     alt="contact-icon"/>
                                Contact Us
                            </Link>
                        </div>

                        <div>
                            <Link to="/aboutus">
                                <img src={process.env.PUBLIC_URL + './LEE_icons/about-us-icon.svg'} className="navigation-logo"
                                     alt="orders-icon"/>
                                About Us
                            </Link>
                        </div>

                        <div><Link to="/cart">
                            <ShoppingCartTwoToneIcon />
                            Cart
                        </Link>
                        </div>

                        <div className={"admin-link"}>
                            <Link to="/admin">
                                <img src={process.env.PUBLIC_URL + './LEE_icons/admin-icon.svg'} className="navigation-logo"
                                     alt="admin-icon"/>
                                Admin</Link>
                        </div>

                        <div>
                            <Link className="logout-button" onClick={handleLogout}>
                                Logout
                            </Link>
                        </div>

                    </ul>
                </nav>
            );
        } else {
            return (
                <nav className="navigation" style={{display: 'flex'}}>
                    <img className='store-logo' onClick={handleLogoClick}
                         src={process.env.PUBLIC_URL + '/courtennis-logo.png'}
                         alt="store-logo"/>
                    <ul className="navigation-links">
                        <div>
                            <Link to="/">
                                <img src={process.env.PUBLIC_URL + './LEE_icons/store-icon.svg'}
                                     className="navigation-logo"
                                     alt="nav-logo"/>
                                Our Jewelry
                            </Link>
                        </div>

                        <div>
                            <Link to="/contactus">
                                <img src={process.env.PUBLIC_URL + './LEE_icons/contact-us-icon.svg'}
                                     className="navigation-logo sale-animation"
                                     alt="contact-icon"/>
                                Contact Us
                            </Link>
                        </div>

                        <div>
                            <Link to="/aboutus">
                                <img src={process.env.PUBLIC_URL + './LEE_icons/about-us-icon.svg'} className="navigation-logo"
                                     alt="orders-icon"/>
                                About Us
                            </Link>
                        </div>

                        <div><Link to="/cart">
                            <ShoppingCartTwoToneIcon />
                            Cart
                        </Link>
                        </div>

                        <div className={"admin-link"}>
                            <Link to="/admin">
                                <img src={process.env.PUBLIC_URL + './LEE_icons/admin-icon.svg'} className="navigation-logo"
                                     alt="admin-icon"/>
                                Admin</Link>
                        </div>

                        <div>
                            <Link className="logout-button" onClick={handleLogout}>
                                Logout
                            </Link>
                        </div>

                    </ul>
                </nav>
            );
        }
    }
};

export default Navigation;