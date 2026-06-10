import { bot } from "./index";
import { isOwner } from "./owner";
import { supabase } from "../lib/supabase";

bot.command("stats", async (ctx) => {
  if (!isOwner(ctx.from.id)) {
    return ctx.reply("❌ Owner only");
  }

  const { count } = await supabase
    .from("users")
    .select("*", {
      count: "exact",
      head: true,
    });

  await ctx.reply(
    `📊 PrimeSpace Stats

👥 Total Users: ${count || 0}`
  );
});
