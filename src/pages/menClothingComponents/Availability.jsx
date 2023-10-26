function Availability() {
  return (
    <div style={{ margin: "20px 0px" }}>
      <h3 style={{ color: "rgb(69, 69, 69)" }}>AVAILABILITY</h3>
      <div
        style={{
          marginTop: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <input type="checkbox" />
          <p style={{ padding: "0px 5px", color: "rgb(69, 69, 69)" }}>
            In stuck
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <input type="checkbox" />
          <p style={{ padding: "0px 5px", color: "rgb(69, 69, 69)" }}>
            Out of stuck
          </p>
        </div>
      </div>
    </div>
  );
}

export default Availability;
