import ama from "./ama.jpg";
function RecentPost() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",

        margin: "20px 0px",
      }}
    >
      <img style={{ height: "100px" }} src={ama} alt="" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <p
          style={{
            color: "rgb(34, 34, 34)",
            fontSize: "14px",
            marginLeft: "10px",
          }}
        >
          7 Easy Rules to Write Product Descriptions That Sell
        </p>
        <p style={{ marginLeft: "10px" }}>July 16, 2022</p>
      </div>
    </div>
  );
}

export default RecentPost;
