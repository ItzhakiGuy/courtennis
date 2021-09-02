import React from 'react';
import './ReadMe.css';

const ReadMe = props => {

    return (
        <div className='readme-container'>
            <h1>Readme - Guy Itzhaki </h1>
            <h1>ID - 206292864</h1>

            <h3>Store name</h3>
            <p>Courtennis</p>

            <h3>What are you selling?</h3>
            <p>We are an e-commerece store specializes in tennis products especially rackets from leading brands.</p>

            <h3>What additional page(s) did you add? How to operate it?</h3>
            <p>
                <ol>
                    <li>"About Us" page, with information about me and Maor</li>
                    <li>"Contact us" page - a page for posting a review about our CourTennis,</li>
                    <li>Thank you for your purchase page</li>
                    <li>Valuable feedback page - simply fill in the contact us form</li>
                </ol>
            </p>

            <h3>What was hard to do?</h3>
            <p>
                <ol>
                    <li>We have stumbled upon few difficulties, the first was how to start with a feature,
                        This is a project where we create everything from scratch so it was pretty though to start work on every topic,
                        We also learned on how exactly we need to use API in general and how to pass data between the
                        backend and the frontend, and parse it correctly on both ends, sending it to the DB (Backend) and the client (Frontend) as needed.
                        Debugging the project was also a hard thing, we have learned to use developer tools of the web browser and debuggers of our IDE,
                        to troubleshoot our bugs and handle them correctly.</li>
                </ol>
            </p>

            <h3>Who is your partner?  name and id. What did you do? What did your partner do?</h3>
            <p>
                Maor Graiber 314976077
                We have decided that we will split the project into features and not by backend and frontend,
                because our main goal was to learn from the experience of the course and learn the most of it.
                We have learned throughout the course toghether and builted the initialized the project toghether,
                learning about how to create the perfect project, and then,
                divided the Authentication (Register, Login, Logout), countact us and about by Maor,
                Guy have created the Store, Cart, Checkout and admin page.
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