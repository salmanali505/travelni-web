export default function Home() {
  return (
    <div style={styles.container}>
      <h1>🚍 Travelni</h1>
      <p>Smart Transportation System</p>

      <div style={styles.grid}>

        <button style={styles.card}>
          📍 Book Trip
        </button>

        <button style={styles.card}>
          🚍 View Trips
        </button>

        <button style={styles.card}>
          🚗 Driver Login
        </button>

        <button style={styles.card}>
          🧑‍💼 Admin Panel
        </button>

      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: 40,
    fontFamily: "Arial"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 20,
    marginTop: 40
  },
  card: {
    padding: 30,
    fontSize: 18,
    borderRadius: 15,
    border: "none",
    cursor: "pointer",
    background: "#0f172a",
    color: "white"
  }
};
