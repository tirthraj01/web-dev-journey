function App() {
  return (
    <div
      style={{
        backgroundColor: "#d3d3d3",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <PostComponent />
      <ProfileCard />
    </div>
  );
}

const style = {
  width: 250,
  backgroundColor: "white",
  borderRadius: 10,
  border: "1px solid gray",
  padding: 20,
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
};

function PostComponent() {
  return (
    <div style={style}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://pbs.twimg.com/profile_images/2058210836326531072/r1whoe9F_400x400.jpg"
          alt="Profile"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
          }}
        />

        <div style={{ fontSize: 12, marginLeft: 10 }}>
          <b>Tirthraj</b>
          <div>500 Followers</div>
          <div>200 Following</div>
        </div>
      </div>

      <div style={{ marginTop: 15, fontSize: 15 }}>
        Gonna grind a lot. Today was tough, but not tomorrow!
        <br />
        No worries, just keep going!
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <div style={style}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="https://pbs.twimg.com/profile_images/2058210836326531072/r1whoe9F_400x400.jpg"
          alt="Profile"
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
          }}
        />
      </div>

      <h2
        style={{
          textAlign: "center",
          marginTop: 15,
          marginBottom: 5,
        }}
      >
        Tirthraj
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "gray",
          margin: 0,
        }}
      >
        Web3 Developer
      </p>

      <hr style={{ margin: "20px 0" }} />

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ textAlign: "center" }}>
          <b>500</b>
          <div style={{ fontSize: 12 }}>Followers</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <b>200</b>
          <div style={{ fontSize: 12 }}>Following</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <b>25</b>
          <div style={{ fontSize: 12 }}>Posts</div>
        </div>
      </div>
    </div>
  );
}

export default App;
