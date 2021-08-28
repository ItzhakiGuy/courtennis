import React from 'react';
import './aboutUs.css';

class AboutUs extends React.Component {
    render() {
        return (
            <div className="about-section">
                <div className="header-container">
                    <h1>The Team</h1>
                </div>

                <div className="team-container">
                    <h2>Our Team</h2>
                    <div className="row">
                        <div className="column">
                            <div className="card">
                                <img src={process.env.PUBLIC_URL + '/team_members/guy_itzhaki.jpeg'} alt="Guy Izhaki"/>
                                <div className="container">
                                    <h2>Guy Itzhaki</h2>
                                    <h3 className="title">Junior Android Developer at IronSource</h3>
                                    <p className="description">I (almost) finished my Computer Science degree, this
                                    is the final touch for me!</p>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="card">
                                <img src={process.env.PUBLIC_URL + '/team_members/maor_graiber.jpeg'} alt="Maor Graiber"/>
                                <div className="container">
                                    <h2>Maor Graiber</h2>
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
