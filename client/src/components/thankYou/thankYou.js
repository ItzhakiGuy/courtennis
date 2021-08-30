import React from "react";
import "./thankYou.css";

const Checkout = () => {
    return (
        <div className="thankyou-container" >
            <img src={process.env.PUBLIC_URL + '/thankyou.png'}/>
        </div>
    );

}

export default Checkout;