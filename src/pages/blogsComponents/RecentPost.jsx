import ama from "./ama.jpg";
function RecentPost({ img, title, date }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",

        margin: "20px 0px",
      }}
    >
      <img style={{ height: "100px" }} src={img} alt="" />
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
          {title}
        </p>
        <p style={{ marginLeft: "10px" }}>{date}</p>
      </div>
    </div>
  );
}

export default RecentPost;
