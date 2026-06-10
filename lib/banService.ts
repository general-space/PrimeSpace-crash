import { supabase } from "./supabase";

export async function isUserBanned(
  telegramId: number
) {
  const { data } = await supabase
    .from("users")
    .select("is_banned")
    .eq("telegram_id", telegramId)
    .maybeSingle();

  if (!data) {
    return false;
  }

  return Boolean(data.is_banned);
}

export async function banUser(
  telegramId: number
) {
  return await supabase
    .from("users")
    .update({
      is_banned: true,
    })
    .eq("telegram_id", telegramId);
}

export async function unbanUser(
  telegramId: number
) {
  return await supabase
    .from("users")
    .update({
      is_banned: false,
    })
    .eq("telegram_id", telegramId);
}
