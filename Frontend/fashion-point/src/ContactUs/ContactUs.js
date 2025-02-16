import React, { useState } from "react";
import "./ContactUs.css";
import Swal from 'sweetalert2'

const ContactUs = () => {


    
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.target);
        formData.append("access_key", "b031cd68-0cb5-4dc4-9daa-ff5943736a47");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            }).then((res) => res.json());

            if (res.success) {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully",
                    icon: "success"
                  });
            } else {
                console.error("Form submission error:", res);
                Swal.fire({
                    title: "Unsuccess!",
                    text: "Failed to send message.",
                    icon: "error"
                  });

                alert("Failed to send message.");
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contactUs-page">
            <div className="contactUs-container">
                {/* Left Side: Contact Form */}
                <div className="contactUs-container-left">
                    <div className="contactUs-form">
                        <form className="contactUs-form-data" onSubmit={onSubmit}>
                            <h1>Contact Us</h1>
                            <p>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    aria-label="Name"
                                    required
                                />
                            </p>
                            <p>
                                <input
                                    className="contactUs-input"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    aria-label="Email"
                                    required
                                />
                            </p>
                            <p>
                                <textarea
                                    className="contactUs-textarea"
                                    name="message"
                                    placeholder="Message"
                                    rows="5"
                                    aria-label="Message"
                                    required
                                ></textarea>
                            </p>
                            <button
                                className="contactUs-button"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Side: Map */}
                <div className="contactUs-container-right">
                    <h2>Our Location</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22170.87586739247!2d78.82674078377497!3d20.544154648403065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3654cef92ddf1%3A0x3d7dbcd4848f3ce!2sHinganghat%2C%20Maharashtra%20442301!5e0!3m2!1sen!2sin!4v1736405831084!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen="" 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
