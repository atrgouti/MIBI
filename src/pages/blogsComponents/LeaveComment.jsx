function LeaveComment() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "whitesmoke",
        marginBottom: "40px",
      }}
    >
      <h3 style={{ textAlign: "center", padding: "20px 0px" }}>
        Leave a Comment
      </h3>
      <form action="" style={{ width: "90%", margin: "10px auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            style={{ padding: "5px", border: "1px solid grey" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            style={{ padding: "5px", border: "1px solid grey" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <label htmlFor="email">Message</label>
          <textarea
            id="email"
            type="text"
            style={{
              padding: "5px",
              border: "1px solid grey",
              marginBottom: "30px",
            }}
          />
          <p style={{ textAlign: "center", marginBottom: "30px" }}>
            Please note, comments must be approved before they are published
          </p>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              width: "fit-content",
              margin: "10px auto",
              border: "1px solid black",
              marginBottom: "30px",
            }}
          >
            POST COMMENT
          </button>
        </div>
      </form>
    </div>
  );
}

export default LeaveComment;
