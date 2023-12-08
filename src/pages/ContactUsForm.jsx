import { useState } from "react";

import styles from "./contactUs.module.css";

function ContactUsForm({
  handleSubmitForm,
  setEmail,
  setMessage,
  setName,
  setNumber,
  setSubject,
}) {
  return (
    <>
      <form action="">
        <div className={styles.nameEmail}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Phone Number"
          className={styles.phoneNumber}
          type="text"
        />
        <input
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className={styles.subject}
          type="text"
        />
        <textarea
          className={styles.textArea}
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={(e) => handleSubmitForm(e)} className={styles.submit}>
          Send
        </button>
      </form>
    </>
  );
}

export default ContactUsForm;
