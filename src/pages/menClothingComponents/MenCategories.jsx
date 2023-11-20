import styles from "./MenCategories.module.css";
function MenCategories({ handleCategorySelect }) {
  const uniqueCategoryArray = [
    "sweatshirt",
    "shoes",
    "t-shirt",
    "shirt",
    "jacket",
  ];

  return (
    <div className={styles.menCategory}>
      <h3>PRODUCT TYPE</h3>
      {uniqueCategoryArray?.map((cate) => (
        <p onClick={() => handleCategorySelect(`${cate}`)} key={cate}>
          {cate}
        </p>
      ))}
    </div>
  );
}

export default MenCategories;
