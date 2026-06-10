export interface User {
  telegram_id: number;
  username: string;
  balance: number;
  total_games: number;
  total_wins: number;
  total_losses: number;
  total_profit: number;
  is_banned: boolean;
}

export interface GameHistory {
  telegram_id: number;
  username: string;
  bet: number;
  multiplier: number;
  result: string;
  profit: number;
}
