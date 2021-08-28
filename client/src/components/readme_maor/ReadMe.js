import React from 'react';
import './ReadMe.css';

const ReadMe = props => {

    return (
        <div className='readme-container'>
            <h1>Readme - Maor Graiber </h1>
            <h1>ID - 314976077</h1>

            <h3>Store name</h3>
            <p>Courtennis</p>

            <h3>What are you selling?</h3>
            <p>Courtennis is selling tennis rackets from leading companies such as Wilson, Babolat & Tecnifibre</p>

            <h3>What additional page(s) did you add? How to operate it?</h3>
            <p>
                <ol>
                    <li>"About Us" page, to learn about the team that founded the website and . In the page our users can
                    read a bit about the brand and about us.</li>
                    <li>A "Contact Us" page in which our users can leave their full name and email address and
                    we will get back to them ASAP!</li>
                    <li>Since our client is our top priority, we have added a goodbye page to be presented after a purchase
                        is complete. In this page, which comes up right after the client completes their purchase, we thank them
                        and present the purchase ID number for future reference.</li>
                </ol>
            </p>

            <h3>What was hard to do?</h3>
            <p>
                <ol>
                    <li>Learning to use React.js</li>
                    <li>Understanding how to communicate between FE and BE</li>
                    <li>Learning to efficiently debug the client & server</li>
                </ol>
            </p>

            <h3>Who is your partner?  name and id. What did you do? What did your partner do?</h3>
            <p>
                My partner is Guy Itzhaki, ID: 206292864. <br/>
                Guy and I worked together on the design of the system, initial set up of express, mongo (hosted in atlas), and React.js.
                From there each one took responsibility of a different screen (FE + BE) allowing both tof us to task responsibility of entire pages and doing the routing + FE work.
                Maor's screens - Login/Sign Up page, About Us, Contact Us,
                Guy's screens - Store and design, cart
            </p>


            <h3>Did you implement the store using react.js?</h3>
            <p>
                Yes, our store was implemented using React.js.
            </p>

            <h3>Specify all the different routes your app supports</h3>
            <p>
                GET routes: <br/>
                <ol>
                    <li>Logout - api/logout</li>
                    <li>Admin - api/admin/users</li>
                    <li>Admin - api/admin/user:id</li>
                    <li>Purchase - api/purchase</li>
                </ol>
                POST routes:
                <ol>
                    <li>Sign Up - register</li>
                    <li>Login - login</li>
                    <li>Purchase - purchase</li>
                </ol>
            </p>
        </div>
    );

};

export default ReadMe;