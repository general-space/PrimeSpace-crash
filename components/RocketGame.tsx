"use client";

import { useState } from "react";

export default function RocketGame() {
  const [multiplier] = useState(1.0);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1
        style={{
          fontSize: "80px",
        }}
      >
        🚀
      </h1>

      <h2>x{multiplier.toFixed(2)}</h2>
    </div>
  );
}
