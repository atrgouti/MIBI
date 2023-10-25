import styles from "./MenPageProducts.module.css";
import MenProduct from "./MenProduct";

function MenPageProducts() {
  return (
    <div className={styles.menPageProducts}>
      <h1>Women</h1>
      <p>
        The very latest in globally-recognised clothing brands offers you with
        an exquisite range of Branded Clothes, Artificial Jewelry, Shoes, Beauty
        Products and Accessories for Women, Men & Kids at affordable price
      </p>
      <div className={styles.numProducts}>
        <p>Showing: 20 Results</p>
        <select name="" id="">
          Featured
          <option value="" selected>
            Sort by
          </option>
          <option value="">Featured</option>
          <option value="">Best selling</option>
          <option value="">A - Z</option>
          <option value="">Z - A</option>
          <option value="">Lowest price</option>
          <option value="">Heighst Price</option>
          <option value="">New to Old</option>
          <option value="">Old to New</option>
        </select>
      </div>
      <div className={styles.menProductsItems}>
        <MenProduct
          hash={"LcPs;ZWB^,t7t7j[WBay_4ofD$WB"}
          img={
            "https://byclccpokszkbxfgiwhw.supabase.co/storage/v1/object/public/ProductImages/men-tshirt-1-1.jpg"
          }
          title={"supaaaaa"}
          price={"29.99"}
        />
        <MenProduct
          hash={"LcPs;ZWB^,t7t7j[WBay_4ofD$WB"}
          img={
            "https://byclccpokszkbxfgiwhw.supabase.co/storage/v1/object/public/ProductImages/men-tshirt-1-1.jpg"
          }
          title={"supaaaaa"}
          price={"29.99"}
        />
        <MenProduct
          hash={"LcPs;ZWB^,t7t7j[WBay_4ofD$WB"}
          img={
            "https://byclccpokszkbxfgiwhw.supabase.co/storage/v1/object/public/ProductImages/men-tshirt-1-1.jpg"
          }
          title={"supaaaaa"}
          price={"29.99"}
        />
        <MenProduct
          hash={"LcPs;ZWB^,t7t7j[WBay_4ofD$WB"}
          img={
            "https://byclccpokszkbxfgiwhw.supabase.co/storage/v1/object/public/ProductImages/men-tshirt-1-1.jpg"
          }
          title={"supaaaaa"}
          price={"29.99"}
        />
      </div>
    </div>
  );
}

export default MenPageProducts;
