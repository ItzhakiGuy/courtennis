import React from "react";
import "./feedback.css";

const Feedback = () => {
    return (
        <div className="feedback-container" >
            <img src={process.env.PUBLIC_URL + '/feedback.jpeg'} alt={"maor & guy"}/>
        </div>
    );

}

export default Feedback;