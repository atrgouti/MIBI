import { useState } from "react";
import styles from "./contactUs.module.css";
function ContactUsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmitForm(e) {
    e.preventDefault();
    if (
      email !== "" ||
      number !== "" ||
      name !== "" ||
      subject !== "" ||
      message !== ""
    ) {
      console.log(name, email, number, message, subject);
    } else {
      console.log("3mr kolchi");
    }
  }
  return (
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
  );
}

export default ContactUsForm;
