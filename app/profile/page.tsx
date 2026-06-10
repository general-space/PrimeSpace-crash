import Navbar from "../../components/Navbar";
import CosmicBackground from "../../components/CosmicBackground";

export default function ProfilePage() {
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
          👤 Profile
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "20px",
          }}
        >
          PrimeSpace User Information
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
          <p>👤 Username: -</p>

          <p
            style={{
              marginTop: "10px",
            }}
          >
            💰 Balance: 0 Coin
          </p>

          <p
            style={{
              marginTop: "10px",
            }}
          >
            🎮 Total Games: 0
          </p>

          <p
            style={{
              marginTop: "10px",
            }}
          >
            🏆 Total Wins: 0
          </p>

          <p
            style={{
              marginTop: "10px",
            }}
          >
            📉 Total Losses: 0
          </p>

          <p
            style={{
              marginTop: "10px",
            }}
          >
            📈 Total Profit: 0 Coin
          </p>
        </div>
      </main>
    </>
  );
}
