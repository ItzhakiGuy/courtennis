import React from 'react';
import './contactUsPage.css';


class ContactUsPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h2>Contact Us</h2>
                    <p>Please reach out to us with any feedback you may have</p>
                </div>
                <div className="row">
                        <div className="column">
                            <img className="image-container" src={process.env.PUBLIC_URL + './images/tlv.jpg'} alt="Lee"/>
                            <p>Our address is:</p>
                            <p>100 Dizengoff Street, Tel Aviv</p>
                        </div>
                    <div className="column">
                        <form>
                            <label>
                                First Name:
                                <input type="text" name="first-name" placeholder="Enter your first name..."/>
                            </label>
                            <label>
                                Last Name:
                                <input type="text" name="last-name" placeholder="Enter your last name..."/>
                            </label>
                            <label>
                                Email:
                                <input type="text" name="email" placeholder="Enter your email address..."/>
                            </label>
                            <label>
                                Tell us what's on your mind:
                                <input type="text" name="share" placeholder="Type your thoughts here..."/>
                            </label>
                            <h3>We'll get back to you as soon as possible!</h3>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUsPage;