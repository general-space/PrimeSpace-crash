type Props = {
  profit: number;
};

export default function WinModal({
  profit,
}: Props) {
  return (
    <div
      style={{
        background: "#065f46",
        padding: "20px",
        borderRadius: "16px",
        marginTop: "20px",
      }}
    >
      <h2>🎉 CASH OUT SUCCESS</h2>

      <p>📈 Profit: +{profit}</p>
    </div>
  );
}
