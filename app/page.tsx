import Navbar from "../components/Navbar";
import CosmicBackground from "../components/CosmicBackground";
import BalanceCard from "../components/BalanceCard";
import MenuCard from "../components/MenuCard";

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
          color: "white",
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

        <BalanceCard balance={0} />

        <MenuCard title="🚀 Play Game" />
        <MenuCard title="👤 Profile" />
        <MenuCard title="🏆 Leaderboard" />
        <MenuCard title="📜 History" />
      </main>
    </>
  );
}
