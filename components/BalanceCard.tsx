type Props = {
  balance?: number;
};

export default function BalanceCard({
  balance = 0,
}: Props) {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#111827,#1e293b)",
        padding: "24px",
        borderRadius: "18px",
        marginTop: "20px",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h3
        style={{
          color: "#94a3b8",
          marginBottom: "10px",
        }}
      >
        💰 Balance
      </h3>

      <h1
        style={{
          fontSize: "32px",
        }}
      >
        {balance.toLocaleString("id-ID")} Coin
      </h1>
    </div>
  );
}
