type Props = {
  loss: number;
};

export default function CrashModal({
  loss,
}: Props) {
  return (
    <div
      style={{
        background: "#7f1d1d",
        padding: "20px",
        borderRadius: "16px",
        marginTop: "20px",
      }}
    >
      <h2>💥 SPACEMAN CRASH</h2>

      <p>📉 Loss: -{loss}</p>
    </div>
  );
}
