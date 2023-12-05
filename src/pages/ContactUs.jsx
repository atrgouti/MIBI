import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import filtringStyles from "./filtring.module.css";
import CurrentCategory from "../components/CurrentCategory";

function ContactUs({
  ActiveFilter,
  setActiveFilter,
  cartItems,
  addItemToCart,
  handleDeleteMovies,
  setSideBarIsActive,
  sideBarIsActive,
  increaseQuantity,
  decreaseQuntity,
}) {
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
        <div
          style={{
            width: "80%",
            margin: "50px auto",
            display: "flex",
            gap: "15px",
          }}
        >
          <div style={{ width: "65%" }}>
            <h2 style={{ textAlign: "center" }}>Contact Us</h2>
            <p style={{ textAlign: "center" }}>
              Get in touch and let us know how we can help. Have a question but
              aren’t sure who to contact? Get in touch and a member of our team
              will reach out to you.
            </p>
          </div>
          <div style={{ width: "35%" }}>sa</div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
