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
        <h1>🚀 PrimeSpace Game</h1>

        <RocketGame />

        <BetPanel />
      </main>
    </>
  );
}
