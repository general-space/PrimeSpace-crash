"use client";

import { useEffect, useState } from "react";

export default function RocketGame() {
  const [multiplier, setMultiplier] =
    useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setMultiplier((prev) =>
        Number((prev + 0.01).toFixed(2))
      );
    }, 100);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          fontSize: "90px",
          animation:
            "float 1s ease-in-out infinite",
        }}
      >
        🚀
      </div>

      <h1
        style={{
          marginTop: "20px",
          fontSize: "48px",
        }}
      >
        x{multiplier.toFixed(2)}
      </h1>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}
