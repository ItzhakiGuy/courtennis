import React from "react";
import "./thankYou.css";

const ThankYou = () => {
    return (
        <div className="thankyou-container" >
            <img src={process.env.PUBLIC_URL + '/thankyou.png'} alt={"maor & guy"}/>
        </div>
    );

}

export default ThankYou;