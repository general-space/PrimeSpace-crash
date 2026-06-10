import RocketGame from "../../components/RocketGame";
import BetPanel from "../../components/BetPanel";
import CosmicBackground from "../../components/CosmicBackground";

export default function GamePage() {
  return (
    <>
      <CosmicBackground />

      <main
        style={{
          minHeight: "100vh",
          color: "white",
          padding: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          🚀 PrimeSpace Game
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "20px",
          }}
        >
          Cosmic Space Experience
        </p>

        <RocketGame />

        <BetPanel />
      </main>
    </>
  );
}
