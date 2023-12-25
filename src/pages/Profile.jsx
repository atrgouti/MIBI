import supabase from "../components/supabase";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import filtringStyles from "./filtring.module.css";
import CurrentCategory from "../components/CurrentCategory";
import styles from "./profile.module.css";
import Footer from "../components/Footer";
import { useEffect } from "react";

function Profile({
  ActiveFilter,
  setActiveFilter,
  cartItems,
  handleDeleteMovies,
  setSideBarIsActive,
  sideBarIsActive,
  increaseQuantity,
  decreaseQuntity,
  wishList,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    async function check() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user === null) {
        navigate("/Account");
      }
    }
    check();
  }, [navigate]);

  async function handleSignOut() {
    let { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    } else {
      navigate("/Account");
    }
  }

  return (
    <>
      <div className={ActiveFilter ? filtringStyles.filter : ""}></div>
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
        wishList={wishList}
      />
      <div
        style={{
          position: "relative",
          top: "110px",
          backgroundColor: "white",
        }}
      >
        <CurrentCategory category={"Account"} />
        <h1 className={styles.header}>My Account</h1>
        <div className={styles.orderHistory}>
          <div className={styles.welcome}>
            <p>Welcome bilal johhio</p>
            <div className={styles.links}>
              <p>Order History</p>
              <p onClick={() => handleSignOut()}>Log out</p>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.order}>
            <h2>Order History</h2>
            <p>You have no order History</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Profile;
