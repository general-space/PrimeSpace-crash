export default function CosmicBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background:
          "radial-gradient(circle at top, #4338ca 0%, #050816 60%)",
      }}
    />
  );
}
