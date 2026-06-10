export type GameResult = {
  crashPoint: number;
  profit: number;
  winAmount: number;
};

export function generateCrashPoint(): number {
  const random = Math.random() * 100;

  // 90% crash di bawah x2
  if (random < 90) {
    return Number(
      (1 + Math.random()).toFixed(2)
    );
  }

  // 8% crash x2-x5
  if (random < 98) {
    return Number(
      (2 + Math.random() * 3).toFixed(2)
    );
  }

  // 1.5% crash x5-x10
  if (random < 99.5) {
    return Number(
      (5 + Math.random() * 5).toFixed(2)
    );
  }

  // 0.5% x10+
  return Number(
    (10 + Math.random() * 40).toFixed(2)
  );
}

export function calculateWin(
  bet: number,
  multiplier: number
): GameResult {
  const winAmount = Math.floor(
    bet * multiplier
  );

  return {
    crashPoint: multiplier,
    profit: winAmount - bet,
    winAmount,
  };
}

export function isWin(
  cashOutMultiplier: number,
  crashPoint: number
) {
  return cashOutMultiplier < crashPoint;
}
