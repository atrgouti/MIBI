import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
function MenProductIsLoading() {
  return (
    <div
      style={{
        height: "100vh",
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FontAwesomeIcon icon={faSpinner} style={{ fontSize: "30px" }} spin />
    </div>
  );
}

export default MenProductIsLoading;
