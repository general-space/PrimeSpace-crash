import Navbar from "../../components/Navbar";
import CosmicBackground from "../../components/CosmicBackground";

export default function LeaderboardPage() {
  return (
    <>
      <CosmicBackground />

      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "20px",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          🏆 Leaderboard
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "20px",
          }}
        >
          Top PrimeSpace Players
        </p>

        <div
          style={{
            background:
              "linear-gradient(135deg,#111827,#1e293b)",
            padding: "24px",
            borderRadius: "18px",
            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p>🥇 Top Player</p>

          <p
            style={{
              marginTop: "12px",
            }}
          >
            🥈 Top Player
          </p>

          <p
            style={{
              marginTop: "12px",
            }}
          >
            🥉 Top Player
          </p>
        </div>
      </main>
    </>
  );
}
