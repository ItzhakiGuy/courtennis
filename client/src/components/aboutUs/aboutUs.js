import React from 'react';
import './aboutUs.css';

class AboutUs extends React.Component {
    render() {
        return (
            <div className="about-us">
                <div className="header-container">
                    <h1>The Team</h1>
                </div>

                <div className="squad-container">
                    <div className="row">
                        <div className="column">
                            <div className="card">
                                <img src={process.env.PUBLIC_URL + '/team_members/guy_itzhaki.jpeg'} alt="Guy Izhaki"/>
                                <div className="container">
                                    <h2>Guy Itzhaki</h2>
                                    <br></br>
                                    <p className="desc">I love hangout with friends and family, go to the beach
                                        and trip around the world.<br></br>
                                        This is my first business in the sports industry</p>
                                </div>
                        </div>
                        </div>
                        <div className="column">
                        <div className="card">
                            <img src={process.env.PUBLIC_URL + '/team_members/maor_graiber.jpeg'} alt="Maor Graiber"/>
                            <div className="container">
                                <h2>Maor Graiber</h2>
                                <br></br>
                                <p className="desc">I'm 26 from Hod Hasharon. Tennis has always been a passion of mine, that's were the idea for the store originated<br></br>
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default AboutUs;
