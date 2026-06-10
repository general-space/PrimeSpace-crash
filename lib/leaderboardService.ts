import { supabase } from "./supabase";

export async function getTopBalance() {
  return await supabase
    .from("users")
    .select("*")
    .order("balance", {
      ascending: false,
    })
    .limit(10);
}

export async function getTopWins() {
  return await supabase
    .from("users")
    .select("*")
    .order("total_wins", {
      ascending: false,
    })
    .limit(10);
}
