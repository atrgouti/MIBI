function Availability({ setInStock, inStock, outOfStock, setOutOfStock }) {
  return (
    <div style={{ margin: "20px 0px" }}>
      <h3 style={{ color: "rgb(69, 69, 69)" }}>AVAILABILITY</h3>
      <div
        style={{
          marginTop: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            id="instock"
            checked={inStock}
            onChange={() => setInStock(!inStock)}
          />
          <label
            htmlFor="instock"
            style={{ padding: "0px 5px", color: "rgb(69, 69, 69)" }}
          >
            In stuck
          </label>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            id="outStock"
            checked={outOfStock}
            onChange={() => setOutOfStock(!outOfStock)}
          />
          <label
            htmlFor="outStock"
            style={{ padding: "0px 5px", color: "rgb(69, 69, 69)" }}
          >
            Out of stuck
          </label>
        </div>
      </div>
    </div>
  );
}

export default Availability;
