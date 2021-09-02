import React from 'react';
import './ReadMe.css';

const ReadMe = () => {

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
                    <li>"About Us" page, to learn about the team that founded the website. In the page our users can
                    read a bit about the brand and about us the founders.</li>
                    <li>A "Contact Us" page in which our users can leave their comments about the website!</li>
                    <li>Thank you for your purchase page</li>
                    <li>Valuable feedback page - just fill in the contact us form</li>
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
                From there each one took responsibility of a different screen (FE + BE) allowing both of us to take responsibility of entire pages and doing the routing + FE work.
                <br></br>
                Maor's screens - Login/Sign Up page, About Us, Contact Us,
                <br></br>
                Guy's screens - Store and design, cart
            </p>

            <h3>Specify all the different routes your app supports</h3>
            <p>
                Backend GET routes: <br/>
                <ol>
                    <li>Get All Products - /products</li>
                    <li>Get All Users - /users</li>

                </ol>
                Backend POST routes:
                <ol>
                    <li>Login - /Login</li>
                    <li>Register - /register</li>
                    <li>Add new product (internal route) - /products/new</li>
                </ol>
                React routes: <br/>
                <ol>
                    <li>Login - /login</li>
                    <li>Register - /register</li>
                    <li>Admin - /Admin</li>
                    <li>Browse - /</li>
                    <li>Checkout - /checkout</li>
                    <li>Cart - /cart</li>
                    <li>About us - /aboutus</li>
                    <li>Thank you page - /thankYou</li>
                    <li>Contactus - /contactus</li>
                    <li>Feedback - /feedback</li>
                    <li>Readme - /readme.html</li>
                </ol>
            </p>
        </div>
    );

};

export default ReadMe;