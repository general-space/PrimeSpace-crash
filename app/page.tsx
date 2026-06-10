export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #050816, #0f172a)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "500px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          🚀 PrimeSpace Crash
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "20px",
          }}
        >
          Cosmic Space Crash Experience
        </p>

        <button
          style={{
            padding: "12px 24px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          PLAY GAME
        </button>
      </div>
    </main>
  );
}
