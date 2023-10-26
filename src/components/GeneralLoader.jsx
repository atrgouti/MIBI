import "../App.css";
function GeneralLoader() {
  return (
    <div
      style={{
        position: "fixed",
        top: "100px",
        right: "50px",
        zIndex: "10",
      }}
    >
      <div className="loading">
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
      </div>
    </div>
  );
}

export default GeneralLoader;
