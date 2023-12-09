import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import filtringStyles from "./filtring.module.css";
import CurrentCategory from "../components/CurrentCategory";
import styles from "./AccountLogin.module.css";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../components/supabase";
function AccountLogin({
  ActiveFilter,
  setActiveFilter,
  cartItems,
  handleDeleteMovies,
  setSideBarIsActive,
  sideBarIsActive,
  increaseQuantity,
  decreaseQuntity,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) return console.log("please fill all the feilds");

    try {
      let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        console.log("error:", error);
      } else {
        console.log("user loged in suceffuly", data);
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
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
        <h1 className={styles.header}>My Account</h1>
        <div className={styles.twoOptions}>
          <div className={styles.login}>
            <div className={styles.loginArea}>
              <h2 style={{ fontWeight: "bold" }}>Login</h2>
              <p style={{ margin: "15px 0px" }}>
                If you have an account with us, please log in.
              </p>
              <form action="" onSubmit={(e) => handleLogin(e)}>
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
                <div className={styles.signForget}>
                  <button>SIGN IN</button>
                  <p>Forgot your password?</p>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.createAccount}>
            <div className={styles.loginArea}>
              <h2 style={{ fontWeight: "bold" }}>New Customer?</h2>
              <p style={{ margin: "15px 0px" }}>
                Registering for this site allows you to access your order status
                and history. We’ll get a new account set up for you in no time.
                For this will only ask you for information necessary to make the
                purchase process faster and easier
              </p>

              <div className={styles.signForget}>
                <Link to={"/CreatAccount"}>
                  <button>CREATE AN ACCOUNT</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AccountLogin;
