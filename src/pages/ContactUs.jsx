import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import filtringStyles from "./filtring.module.css";
import CurrentCategory from "../components/CurrentCategory";
import ContactUsForm from "./ContactUsForm";
import Footer from "../components/Footer";
import styles from "./contactUs.module.css";

import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

// fontawsome
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function ContactUs({
  ActiveFilter,
  setActiveFilter,
  cartItems,
  handleDeleteMovies,
  setSideBarIsActive,
  sideBarIsActive,
  increaseQuantity,
  decreaseQuntity,
}) {
  // window.screenTop({ top: 0 });
  window.scrollTo({ top: 0 });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmitForm(e) {
    e.preventDefault();
    if (!email || !number || !name || !subject || !message)
      return toast.error("Please fill all the feilds", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    if (email.indexOf("@") === -1)
      return toast.error("Please write a valid email", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    try {
      const { data } = await axios.post("http://localhost:4000/api/mail", {
        name,
        email,
        number,
        subject,
        message,
      });
      setName("");
      console.log("data has been sent succefully", data);
      toast.success("Your message has been sent sucefully🎉", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.log("error:", error);
    }
  }
  return (
    <>
      <div
        // style={{ position: "absolute" }}
        className={ActiveFilter ? filtringStyles.filter : ""}
      ></div>
      <Announce />
      <Navbar
        sideBarIsActive={sideBarIsActive}
        setSideBarIsActive={setSideBarIsActive}
        handleDeleteMovies={handleDeleteMovies}
        setActiveFilter={setActiveFilter}
        cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuntity={decreaseQuntity}
        makeItActive={"true"}
      />
      <div
        style={{ position: "relative", top: "110px", backgroundColor: "white" }}
      >
        <CurrentCategory category={"Contact Us"} />
        <ToastContainer
          position="bottom-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <div className={styles.formArea}>
          <div className={styles.formDetailsleft}>
            <h2 style={{ textAlign: "center" }}>Contact Us</h2>
            <p
              style={{ textAlign: "center", color: "gray", marginTop: "10px" }}
            >
              Get in touch and let us know how we can help. Have a question but
              aren’t sure who to contact? Get in touch and a member of our team
              will reach out to you.
            </p>

            <ContactUsForm
              handleSubmitForm={handleSubmitForm}
              setName={setName}
              setEmail={setEmail}
              setNumber={setNumber}
              setSubject={setSubject}
              setMessage={setMessage}
            />
          </div>
          <div className={styles.rightDetails}>
            <div className={styles.adress}>
              <p style={{ fontWeight: "bold" }}>ADRESS:</p>
              <p>55 Gallaxy Enque, 2568 steet, 23568 NY</p>
              <p>PHONE: +1 (440) 568 4568</p>
              <p>EMAIL: sales@yousite.com</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.opningHours}>
              <p style={{ fontWeight: "bold" }}>OPENING HOURS</p>
              <p>Mon - Sat : 9am - 11pm</p>
              <p>Sunday: 11am - 5pm</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.stayConnected}>
              <p style={{ fontWeight: "bold" }}>STAY CONNECTED</p>
              <div className={styles.icons}>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={styles.socialIcon}
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={styles.socialIcon}
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.socialIcon}
                />
                <FontAwesomeIcon
                  icon={faPinterest}
                  className={styles.socialIcon}
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
