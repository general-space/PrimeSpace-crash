export default function ProfilePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "20px",
        color: "white",
        background: "#050816",
      }}
    >
      <h1>👤 Profile</h1>

      <div
        style={{
          marginTop: "20px",
          background: "#111827",
          padding: "20px",
          borderRadius: "16px",
        }}
      >
        <p>Username: -</p>
        <p>Balance: 0 Coin</p>
        <p>Total Games: 0</p>
        <p>Total Wins: 0</p>
        <p>Total Losses: 0</p>
      </div>
    </main>
  );
}
