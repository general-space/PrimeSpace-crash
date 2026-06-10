import { getUser } from "./database";

export async function getUserProfile(
  telegramId: number
) {
  const { data } = await getUser(
    telegramId
  );

  if (!data) {
    return null;
  }

  return {
    username: data.username,
    balance: data.balance,
    total_games: data.total_games,
    total_wins: data.total_wins,
    total_losses: data.total_losses,
    total_profit: data.total_profit,
    is_banned: data.is_banned,
    created_at: data.created_at,
  };
}
