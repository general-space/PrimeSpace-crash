import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        🚀 PrimeSpace
      </Link>

      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <Link href="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link href="/game" style={{ color: "white" }}>
          Game
        </Link>

        <Link href="/profile" style={{ color: "white" }}>
          Profile
        </Link>

        <Link href="/leaderboard" style={{ color: "white" }}>
          Leaderboard
        </Link>

        <Link href="/history" style={{ color: "white" }}>
          History
        </Link>

        <span>💰 0 Coin</span>
      </div>
    </nav>
  );
}
