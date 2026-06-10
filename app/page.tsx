import Navbar from "../components/Navbar";
import CosmicBackground from "../components/CosmicBackground";
import BalanceCard from "../components/BalanceCard";

export default function HomePage() {
  return (
    <>
      <CosmicBackground />

      <Navbar />

      <main
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <h1>🚀 PrimeSpace Crash</h1>

        <p>Cosmic Space Crash Experience</p>

        <BalanceCard balance={0} />
      </main>
    </>
  );
}
