export type GameResult = {
  crashPoint: number;
  profit: number;
  winAmount: number;
};

export function generateCrashPoint(): number {
  const random = Math.random() * 100;

  // Sering crash (game demo coin virtual)

  if (random < 90) {
    return Number((1 + Math.random()).toFixed(2));
  }

  if (random < 98) {
    return Number((2 + Math.random() * 3).toFixed(2));
  }

  if (random < 99.5) {
    return Number((5 + Math.random() * 5).toFixed(2));
  }

  return Number((10 + Math.random() * 40).toFixed(2));
}

export function calculateWin(
  bet: number,
  multiplier: number
): GameResult {
  const winAmount = Math.floor(
    bet * multiplier
  );

  const profit = winAmount - bet;

  return {
    crashPoint: multiplier,
    profit,
    winAmount,
  };
}
