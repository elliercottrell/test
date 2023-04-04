import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";

function ContactForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const validate = () => {
    return userName.length & userEmail.length;
  };

  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();
    emailjs
      .sendForm(
        "service_kd193wf",
        "template_4650z95",
        form.current,
        "fPtv2LayOEquaW5__"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("THANK YOU, Message Sent");
  };

  return (
    <div className="contactForm">
      <div className="messageHeading">
        <h2>Message</h2>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          name="user_name"
          value={userName}
          placeholder="name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          className="yourEmail"
          name="user_email"
          value={userEmail}
          placeholder="email"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          type="text"
          className="yourMessage"
          name="message"
          value={userMessage}
          placeholder="message"
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <input
          type="submit"
          className="pleaseSubmit"
          value="Send"
          disabled={!validate()}
        />
      </form>
    </div>
  );
}

export default ContactForm;
