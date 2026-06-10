export default function CosmicBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: `
          radial-gradient(circle at top, #4338ca 0%, #050816 45%),
          radial-gradient(circle at bottom right, #1e40af 0%, transparent 35%),
          radial-gradient(circle at bottom left, #581c87 0%, transparent 30%)
        `,
      }}
    />
  );
}
