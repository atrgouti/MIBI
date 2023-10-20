import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
function HomeProductsIsLoading() {
  return (
    <div
      style={{
        height: "530px",
        width: "250px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FontAwesomeIcon icon={faSpinner} style={{ fontSize: "30px" }} spin />
    </div>
  );
}

export default HomeProductsIsLoading;
