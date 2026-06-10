"use client";

import { useState } from "react";

export default function BetPanel() {
  const [bet, setBet] = useState(1000);

  return (
    <div
      style={{
        background: "#111827",
        padding: "20px",
        borderRadius: "16px",
        marginTop: "20px",
      }}
    >
      <h3>💰 Bet Amount</h3>

      <input
        type="number"
        value={bet}
        onChange={(e) =>
          setBet(Number(e.target.value))
        }
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
        🚀 START GAME
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
        💸 CASH OUT
      </button>
    </div>
  );
}
