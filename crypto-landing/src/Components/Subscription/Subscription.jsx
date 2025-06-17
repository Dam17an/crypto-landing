import React from "react";
import "./Subscription.scss";

const Subscription = () => {
    return (
        <section className="subscription">
            <div className="subscription__content">
                <h2>Receive transmissions</h2>
                <p>
                    Unsubscribe at any time.{" "}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                        Privacy policy ↗
                    </a>
                </p>
                <form className="subscription__form">
                    <input type="email" placeholder="Email Address" required />
                    <button type="submit">→</button>
                </form>
            </div>
        </section>
    );
};

export default Subscription;