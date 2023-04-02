import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
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
          placeholder="name"
        />
        <input
          type="text"
          className="yourEmail"
          name="user_email"
          placeholder="email"
        />
        <input
          type="text"
          className="yourMessage"
          name="message"
          placeholder="message"
        />
        <input
          type="submit"
          className="pleaseSubmit"
          value="Send"
          style={{ padding: "20px" }}
        />
      </form>
    </div>
  );
}

export default ContactForm;
