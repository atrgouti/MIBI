import categoriesStyle from "./categories.module.css";
function Categories() {
  return (
    <section className={categoriesStyle.section}>
      <div className={categoriesStyle.categories}>
        <div className={categoriesStyle.title}>
          <ShortLine />
          <p>Shop Categories</p>
          <ShortLine />
        </div>
        <p className={categoriesStyle.subtitle}>
          Shop our Editor`s Picks for outfit inspiration and must-have looks
        </p>
        <div className={categoriesStyle.categoriesGrid}>
          <div
            className={categoriesStyle.women}
            style={{
              backgroundImage: "url(/women.jpg)",
              backgroundSize: "cover",
              width: "100%",
            }}
          >
            <p>Women</p>
          </div>
          <div
            className={categoriesStyle.men}
            style={{
              backgroundImage: "url(/men.jpg)",
              backgroundSize: "cover",
              width: "100%",
            }}
          >
            <p>Men</p>
          </div>
          <div
            className={categoriesStyle.backpack}
            style={{
              backgroundImage: "url(/bags.jpg)",
              backgroundSize: "cover",
              width: "100%",
            }}
          >
            <p>Backpack</p>
          </div>
          <div
            className={categoriesStyle.accessories}
            style={{
              backgroundImage: "url(/acc.jpg)",
              backgroundSize: "cover",
              width: "100%",
            }}
          >
            <p>Accessories</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
function ShortLine() {
  return (
    <div
      style={{
        height: "2px",
        width: "70px",
        backgroundColor: "black",
        zIndex: "90",
      }}
    ></div>
  );
}
