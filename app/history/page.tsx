import Navbar from "../../components/Navbar";
import CosmicBackground from "../../components/CosmicBackground";

export default function HistoryPage() {
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
          📜 History
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "20px",
          }}
        >
          Recent PrimeSpace Activity
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
          No game history found.
        </div>
      </main>
    </>
  );
}
