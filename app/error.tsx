"use client";

export default function Error({
  error,
}: {
  error: Error;
}) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
      }}
    >
      <h1>⚠️ Error</h1>

      <p>{error.message}</p>
    </main>
  );
}
