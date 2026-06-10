export default function LeaderboardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "20px",
        color: "white",
        background: "#050816",
      }}
    >
      <h1>🏆 Leaderboard</h1>

      <div
        style={{
          marginTop: "20px",
          background: "#111827",
          padding: "20px",
          borderRadius: "16px",
        }}
      >
        <p>🥇 Top Player</p>
        <p>🥈 Top Player</p>
        <p>🥉 Top Player</p>
      </div>
    </main>
  );
}
