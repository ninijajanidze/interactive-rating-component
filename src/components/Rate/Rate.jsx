import "./Rate.css";
import { useState } from "react";

import Star from "/images/icon-star.svg"

export default function Rate({setSubmit, rate, setRate}) {
    let buttons = [1, 2, 3, 4, 5];
    return <div className="rate-container">
        <div className="star">
           <img src={Star} alt="star icon" />
        </div>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="buttons-container">
        {buttons.map((button) => (
        <button className="rate"
         onClick={() => setRate(button)}
         key={button} 
         style={rate == button ? {backgroundColor: "#7c8798"} : {}}>
            {button}
            </button>
            ))}
        </div>
        <button 
        className="submit" 
        onClick={() => {
            rate && setSubmit(true);
        }}
        >
        SUBMIT
        </button>
    </div>
}
