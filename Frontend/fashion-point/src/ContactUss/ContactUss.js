import React, { useState } from "react";
import "./ContactUss.css";
import Swal from 'sweetalert2'
const ContactUss = () => {
const [submit,setSubmit]= useState(false);
 const onSubmit = async (event) => {
        event.preventDefault();
        setSubmit(true);

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
            setSubmit(false);
        }
    };

  return (
    <>
      <div className="ContactUssPage">
        <div className="ContactUssPage-container">
          <div className="ContactUssPage-container-Subsection">
            <h1 className="heading ">Contact US</h1>
            <p className="para">We will get back you asap!</p>
            <form
              action="onSubmit"

              onSubmit={onSubmit}
              className="ContactUssPage-container-formSection"
            >
              <label
                htmlFor="name"
                className="ContactUssPage-container-formSection-label"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="ContactUssPage-container-formSection-labelInput"
              />

              <label className="ContactUssPage-container-formSection-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="ContactUssPage-container-formSection-labelInput"
              />

              <label className="ContactUssPage-container-formSection-label">
                Phone Number
              </label>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Enter Your Phone Number"
                className="ContactUssPage-container-formSection-labelInput"
              />

              <label className="ContactUssPage-container-formSection-label">
                Message
              </label>
              <textarea
                
                name="message"
                placeholder="Enter Your Message"
                className="ContactUssPage-container-formSection-labelInput ContactUssPage-container-formSection-labelTextarea"
              />

              <button className="ContactUss-Button"
              type="submit"
              disabled={submit}
              >
              {
                submit? "Sending...":"Send Message"
              }
              
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUss;
