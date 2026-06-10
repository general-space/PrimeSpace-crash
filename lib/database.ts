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
    })
    .select()
    .single();
}

export async function getUser(
  telegramId: number
) {
  return await supabase
    .from("users")
    .select("*")
    .eq("telegram_id", telegramId)
    .single();
}

export async function updateBalance(
  telegramId: number,
  balance: number
) {
  return await supabase
    .from("users")
    .update({
      balance,
    })
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
    data.balance + amount;

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

  const newBalance =
    data.balance - amount;

  await updateBalance(
    telegramId,
    newBalance
  );

  return newBalance;
}
