import React from "react";
import "./goodbyePage.css";

const Checkout = props => {

    const hanldeContinueShopping = (event) => {
        props.history.push("/");
    }

    return (
        <div className="goodbye-container" >
            <h1>Thank You!</h1>
            <h3 className="goodbye-message">Hurray! We received your order! Order number {props.location.orderId} is on it's way.</h3>
            <button type="button" className="back-to-store-button" onClick={hanldeContinueShopping}>Back to Store</button>
        </div>
    );

}

export default Checkout;