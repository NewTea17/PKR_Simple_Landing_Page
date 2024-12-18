import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/guz_aroslav.jpg"} alt="Yaroslav Guz" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Yaroslav Guz</h2>
          <p style={styles.position}>Trainee Java Developer</p>
        </div>
      </div>

      <div style={styles.card}>
        <img src={"/bodnar_solomia.jpg"} alt="Solomia Bodnar" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Solomia Bodnar</h2>
          <p style={styles.position}>Project Manager</p>
        </div>
      </div>

      <div style={styles.card}>
        <img src={"/babych_kateryna.jpg"} alt="Kateryna Babych" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Kateryna Babych</h2>
          <p style={styles.position}>Business Analyst</p>
        </div>
      </div>

      <div style={styles.card}>
        <img src={"/drobot_denys.jpg"} alt="Drobot Denys" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Drobot Denys</h2>
          <p style={styles.position}>UI/UX designer & front-end developer</p>
        </div>
      </div>

      <div style={styles.card}>
        <img src={"/babych_illia.jpg"} alt="Illia Babych" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Illia Babych</h2>
          <p style={styles.position}>UI/UX designer & Front-end Developer</p>
        </div>
      </div>

      <div style={styles.card}>
        <img src={"/blyndiuk_oleksandr.jpg"} alt="Blyndiuk Oleksandr" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Blyndiuk Oleksandr</h2>
          <p style={styles.position}>QA Tester</p>
        </div>
      </div>

    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "175px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "grey"
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#fff",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "green", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
