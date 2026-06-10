import { supabase } from "./supabase";

export async function getHistory(
  telegramId: number
) {
  return await supabase
    .from("game_history")
    .select("*")
    .eq("telegram_id", telegramId)
    .order("created_at", {
      ascending: false,
    });
}

export async function addHistory(
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
