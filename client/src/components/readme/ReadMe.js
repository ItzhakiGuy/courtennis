import React from 'react';
import './ReadMe.css';

const ReadMe = props => {

    return (
        <div className='readme-container'>
            <h2>Read Me - Lee Cohen, ID: 311127419</h2>

            <h3>Store name</h3>
                ALKU Jewelry

            <h3>What are you selling?</h3>
            <p>
                ALKU Jewelry is a fine hand-made jewelry brand. <br/>
                We sell beautiful necklaces, bracelets and rings for reasonable prices!
            </p>

            <h3>What additional page(s) did you add? How to operate them?</h3>
            <p>
                We added a number of extra pages for our clients to use: <br/>
                <ul>
                    <li>An "About Us" page, providing a more personal touch tou our website. In the page our users can
                    read a bit about the brand and about us.</li>
                    <li>A "Contact Us" page in which our users can leave their full name and email address and
                    we will get back to them ASAP!</li>
                    <li>Since our client is our top priority, we have added a goodbye page to be presented after a purchase
                        is complete. In this page, which comes up right after the client completes their purchase, we thank them
                        and present the purchase ID number for future reference.</li>
                </ul>
            </p>

            <h3>What was hard to do?</h3>
            <p>
                We encountered a number of difficulties while working on this project: <br />
                <ul>
                    <li>Co-working - since Zahi went back to the army, we found it very hard to juggle between all the tasks
                    and work together on this project. </li>
                    <li>React.js - this was the first experience for both of us working with React.js which was challenging. </li>
                    <li>Fully integrated system - creating a functional, integrated system to answer all the requirements was difficult.</li>

                </ul>
                </p>

            <h3>Who is your partner? What did you do? What did your partner do?</h3>
            <p>
                My partner is Itzhack Akuka, ID: 065927527. <br/>
                We worked on the project together so we both had something to do with every feature. If we had to say who
                led each part it would probably be:
                Lee - About Us, Contact Us, Store and design.
                Zahi - Cart page, Login/Sign Up page.
            </p>

            <h3>Specify all the different routes your app supports</h3>
            <p>
                Our app supports the following routes: <br/><br/>
                GET requests: <br/>
                <ul>
                    <li>Logout - api/logout</li>
                    <li>Admin - api/admin/users</li>
                    <li>Admin - api/admin/user:id</li>
                    <li>Purchase - api/purchase</li>
                </ul>
                POST requests:
                <ul>
                    <li>Sign Up - register</li>
                    <li>Login - login</li>
                    <li>Purchase - purchase</li>
                </ul>
            </p>

            <h3>How did you make your store secured?</h3>
            <p>
                We took a number of actions to guaranty our store's security: <br/>
                <ul>
                    <li>Password strength - our users are required to choose a strong password which is also encrypted
                    on the server side</li>
                    <li>All routes have exceptions on server</li>
                    <li>All wrong inputs have server exceptions</li>
                    <li>Server and GUI block all API errors received</li>
                </ul>
            </p>

            <h3>Did you implement the store using react.js?</h3>
            <p>
                Yes, our store was implemented using React.js.
            </p>
        </div>
    );

};

export default ReadMe;