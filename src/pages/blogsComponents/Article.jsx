import styles from "./article.module.css";
import ama from "./ama.jpg";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
function Article() {
  function truncatedDescription(description, maxLength) {
    if (description.length < maxLength) {
      return <p>{description}</p>;
    }

    const truncatedText = description.substring(0, maxLength) + "...";
    return <p>{truncatedText}</p>;
  }

  return (
    <div className={styles.article}>
      <img src={ama} className={styles.cover} alt="" />
      <div className={styles.title}>
        <h1>7 Easy Rules to Write Product Descriptions That Sell</h1>
      </div>
      <div className={styles.articleInfos}>
        <p>July 16, 2022</p>
        <p>Posted by Bilal Atrgouti</p>
        <div className={styles.comments}>
          <FontAwesomeIcon icon={faMessage} className={styles.icon} />
          <p>0 Comments</p>
        </div>
      </div>
      <div className={styles.description}>
        {truncatedDescription(
          "Dans ce rapport du Capgemini Research Institute, A World in Balance 2023: Heightened sustainability awareness yet lagging actions, nous apportons un aperçu des tendances notables en matière de durabilité, tant environnementale que sociale, pour les entreprises au niveau mondial. Ce rapport fait suite à l’édition inaugurale de la série de recherches “A world in balance” paru l’année dernière, en mettant ainsi en perspective les évolutions des tendances en matière de développement durable depuis un an.",
          400
        )}
      </div>
      <button className={styles.readMore}>READ MORE</button>
    </div>
  );
}

export default Article;
