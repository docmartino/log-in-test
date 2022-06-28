// https://www.emailjs.com/docs/examples/reactjs/

import "./contact.css";
import { useAuth0 } from "@auth0/auth0-react";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { isAuthenticated, user } = useAuth0();

  if (!isAuthenticated) return <div>Please log in</div>;

  if (isAuthenticated) {
    return (
      <div className="contactContainer">
        <div className="contactForm">
          <form ref={form} onSubmit={sendEmail} className="contact">
            <label>My name</label>
            <input
              type="text"
              name="user_name"
              value={user.name}
              onChange={() => {}}
            />
            <label>My email</label>
            <input
              type="email"
              name="user_email"
              value={user.email}
              onChange={() => {}}
            />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" className="contactBTN" />
          </form>
        </div>
      </div>
    );
  }
};

export default Contact;
