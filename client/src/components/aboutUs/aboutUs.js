import React from 'react';
import './aboutUs.css';

class AboutUs extends React.Component {
    render() {
        return (
            <div className="about-section">
                <div className="header-container">
                    <h1>About ALKU Jewelry</h1>
                    <p>ALKU Jewelry is a fine, hand-made jewelry brand.</p>
                    <p>We thrive to provide the best jewelry shopping experience out there!</p>
                </div>

                <div className="team-container">
                    <h2>Our Team</h2>
                    <div className="row">
                        <div className="column">
                            <div className="card">
                                <img src={process.env.PUBLIC_URL + './images/team/Lee.jpg'} alt="Lee"/>
                                <div className="container">
                                    <h2>Lee Cohen</h2>
                                    <h3 className="title">Junior Android Developer at IronSource</h3>
                                    <p className="description">I (almost) finished my Computer Science degree, this
                                    is the final touch for me!</p>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="card">
                                <img src={process.env.PUBLIC_URL + './images/team/Zahi.jpeg'} alt="Jane"/>
                                <div className="container">
                                    <h2>Itzhack Akuka</h2>
                                    <h3 className="title">Lieutenant Colonel at the Israeli Navy</h3>
                                    <p className="description">Returned to the army after a 3 year break during which I
                                    completed a 1st and 2nd degree!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default AboutUs;
