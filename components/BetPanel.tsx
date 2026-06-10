"use client";

import { useState } from "react";

export default function BetPanel() {
  const [bet, setBet] = useState(1000);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(e.target.value);

    if (Number.isNaN(value)) return;

    setBet(Math.max(0, value));
  };

  return (
    <div
      style={{
        background: "#111827",
        padding: "20px",
        borderRadius: "16px",
        marginTop: "20px",
      }}
    >
      <h3>💰 Demo Amount</h3>

      <input
        type="number"
        min="0"
        value={bet}
        onChange={handleChange}
        style={{
          width: "100%",
          marginTop: "10px",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
        }}
      />

      <button
        style={{
          width: "100%",
          marginTop: "15px",
          padding: "14px",
          borderRadius: "12px",
          border: "none",
          fontWeight: "bold",
        }}
      >
        🚀 START DEMO
      </button>

      <button
        style={{
          width: "100%",
          marginTop: "10px",
          padding: "14px",
          borderRadius: "12px",
          border: "none",
          fontWeight: "bold",
        }}
      >
        ⏹️ STOP DEMO
      </button>
    </div>
  );
}
