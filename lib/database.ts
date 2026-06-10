import { supabase } from "./supabase";

export async function createUser(
  telegramId: number,
  username: string
) {
  return await supabase
    .from("users")
    .upsert({
      telegram_id: telegramId,
      username,
    });
}

export async function getUser(
  telegramId: number
) {
  return await supabase
    .from("users")
    .select("*")
    .eq("telegram_id", telegramId)
    .maybeSingle();
}

export async function updateBalance(
  telegramId: number,
  balance: number
) {
  return await supabase
    .from("users")
    .update({ balance })
    .eq("telegram_id", telegramId);
}

export async function addCoin(
  telegramId: number,
  amount: number
) {
  const { data } = await getUser(
    telegramId
  );

  if (!data) return null;

  const newBalance =
    Number(data.balance) + amount;

  await updateBalance(
    telegramId,
    newBalance
  );

  return newBalance;
}

export async function removeCoin(
  telegramId: number,
  amount: number
) {
  const { data } = await getUser(
    telegramId
  );

  if (!data) return null;

  const newBalance = Math.max(
    0,
    Number(data.balance) - amount
  );

  await updateBalance(
    telegramId,
    newBalance
  );

  return newBalance;
}

export async function saveGameHistory(
  payload: {
    telegram_id: number;
    username: string;
    bet: number;
    multiplier: number;
    result: string;
    profit: number;
  }
) {
  return await supabase
    .from("game_history")
    .insert(payload);
}
