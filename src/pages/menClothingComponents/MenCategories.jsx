import styles from "./MenCategories.module.css";
function MenCategories({ handleCategorySelect, menData }) {
  const originalCategoryArray = menData?.map((item) => item.category);
  const uniqueCategoryArray = originalCategoryArray?.filter(
    (cate, index) => originalCategoryArray.indexOf(cate) === index
  );

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
