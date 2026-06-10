type Props = {
  balance?: number;
};

export default function BalanceCard({
  balance = 0,
}: Props) {
  return (
    <div
      style={{
        background: "#111827",
        padding: "20px",
        borderRadius: "16px",
        marginTop: "20px",
      }}
    >
      <h3>💰 Balance</h3>

      <h1>{balance.toLocaleString()} Coin</h1>
    </div>
  );
}
