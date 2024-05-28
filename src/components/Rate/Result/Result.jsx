
import "./Result.css";
import Thank from "/images/illustration-thank-you.svg";

export default function Result({rate}) {
    return <div className="result-container">
        <img src={Thank} alt="illustration thank you" className="thank-you" />
        <div className="result">
            <h3>You selected {rate} out of 5</h3>
        </div>
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
}