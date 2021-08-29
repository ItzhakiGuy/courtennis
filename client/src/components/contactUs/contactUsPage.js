import React from 'react';
import './contactUsPage.css';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';



class ContactUsPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h2>Contact Us</h2>
                    <p>We would love to hear your impressions about us</p>
                </div>
                <div className="row">
                        <div className="column">
                            <img className="image-container" src={process.env.PUBLIC_URL + './images/tlv.jpg'} alt="Lee"/>
                            <p>Our address is:</p>
                            <p>Reichman University, Herzliya</p>
                        </div>
                    <div className="column">
                        <FormGroup>
                            <FormLabel>
                                First Name:
                                <input type="text" name="first-name" placeholder="Enter your first name..."/>
                            </FormLabel>
                            <FormLabel>
                                Last Name:
                                <input type="text" name="last-name" placeholder="Enter your last name..."/>
                            </FormLabel>
                            <FormLabel>
                                Email:
                                <input type="text" name="email" placeholder="Enter your email address..."/>
                            </FormLabel>
                            <FormLabel>
                                Tell us what's on your mind:
                                <input type="text" name="share" placeholder="Type your thoughts here..."/>
                            </FormLabel>
                            <h3>We'll get back to you as soon as possible!</h3>
                            <input type="submit" value="Submit"/>
                        </FormGroup>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUsPage;