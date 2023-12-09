import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import filtringStyles from "./filtring.module.css";
import CurrentCategory from "../components/CurrentCategory";
import styles from "./CreateAccount.module.css";
import Footer from "../components/Footer";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import supabase from "../components/supabase";
function CreactAccount({
  ActiveFilter,
  setActiveFilter,
  cartItems,
  handleDeleteMovies,
  setSideBarIsActive,
  sideBarIsActive,
  increaseQuantity,
  decreaseQuntity,
}) {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleCreateAccount(e) {
    e.preventDefault();
    if (!firstName || !LastName || !email || !password)
      return console.log("please 3mr kolchi");

    try {
      const { user, error } = await supabase.auth.signUp({ email, password });

      if (error) {
        console.error(error.message);
      } else {
        console.log("user signed up", user);
        navigate("/Account");
      }
    } catch (error) {
      console.log("error", error);
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
        <CurrentCategory category={"Account"} />
        <h1 className={styles.header}>CREATE AN ACCOUNT</h1>
        <form
          onSubmit={(e) => handleCreateAccount(e)}
          action=""
          className={styles.form}
        >
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>SUBMIT</button>
        </form>
        <Footer />
      </div>
    </>
  );
}
export default CreactAccount;
