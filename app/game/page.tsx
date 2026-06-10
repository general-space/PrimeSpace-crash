import RocketGame from "../../components/RocketGame";

export default function GamePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        padding: "20px",
      }}
    >
      <h1>🚀 PrimeSpace Game</h1>

      <RocketGame />
    </main>
  );
}
