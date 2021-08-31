import React from 'react';
import './contactUsPage.css';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';

const ContactUsPage = props => {

    async function submitForm() {
        props.history.push("/feedback");
    };
    

    return (
            <div className="container">
                <div className="header">
                    <h2>Contact Us</h2>
                </div>
                <div className="row">
                    <div className="column">
                        <FormGroup>
                            <FormLabel>
                                First Name:
                                <input type="text" name="first-name" placeholder="Full name"/>
                            </FormLabel>
                            <FormLabel>
                                Email:
                                <input type="text" name="username" placeholder="Email address"/>
                            </FormLabel>
                            <FormLabel>
                                Comment:
                                <input type="text" name="share" placeholder="Comment"/>
                            </FormLabel>
                            <input type="submit" value="Submit" onClick={submitForm} />
                        </FormGroup>
                    </div>
                </div>
            </div>
        )
}

export default ContactUsPage;