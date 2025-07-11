import React from "react";
import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
    return (
        <section className="confirmation-section">
            <h1>Your booking has been confirmed!</h1>
            <p>Thank you for choosing Little Lemon. We look forward to seeing you.</p>
            <Link to="/" className="btn-primary" style={{ marginTop: '30px' }}>
                Back to Home
            </Link>
        </section>
    );
};

export default ConfirmedBooking;
