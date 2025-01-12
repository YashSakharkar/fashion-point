import React from "react";
import './ContactUs.css';

const ContactUs = () => {
    return (
        <>
            <div className="contactUs-page">
                <div className="contactUs-container">

                    {/* Left Side: Contact Form */}
                    <div className="contactUs-container-left">
                        <div className="contactUs-form">
                            <div className="contactUs-form-data">
                                <h1>Contact Us</h1>
                                <p>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                    />
                                </p>
                                <p>
                                    <input className="contactUs-input"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </p>
                                <p>
                                    <textarea className="contactUs-textarea"
                                        placeholder="Message"
                                        rows="5"
                                    ></textarea>
                                </p>
                                <button className="contactUs-button">Send Message</button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Map */}
                    <div className="contactUs-container-right">
                        <h2>Our Location</h2>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22170.87586739247!2d78.82674078377497!3d20.544154648403065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3654cef92ddf1%3A0x3d7dbcd4848f3ce!2sHinganghat%2C%20Maharashtra%20442301!5e0!3m2!1sen!2sin!4v1736405831084!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508162!2d144.9537363154796!3d-37.81627974201852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ceed2e!2sVictoria%2C%20Australia!5e0!3m2!1sen!2sin!4v1618625678621!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
