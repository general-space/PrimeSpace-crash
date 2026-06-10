import { bot } from "./index";
import { isOwner } from "./owner";
import { supabase } from "../lib/supabase";

bot.command("ban", async (ctx) => {
  if (!isOwner(ctx.from.id)) {
    return ctx.reply("❌ Owner only");
  }

  const args = ctx.message.text.split(" ");

  if (args.length < 2) {
    return ctx.reply(
      "Usage:\n/ban USER_ID"
    );
  }

  const targetId = Number(args[1]);

  if (Number.isNaN(targetId)) {
    return ctx.reply(
      "❌ Invalid USER_ID"
    );
  }

  await supabase
    .from("users")
    .update({
      is_banned: true,
    })
    .eq("telegram_id", targetId);

  await ctx.reply(
    `🚫 User banned

👤 User ID: ${targetId}`
  );
});

bot.command("unban", async (ctx) => {
  if (!isOwner(ctx.from.id)) {
    return ctx.reply("❌ Owner only");
  }

  const args = ctx.message.text.split(" ");

  if (args.length < 2) {
    return ctx.reply(
      "Usage:\n/unban USER_ID"
    );
  }

  const targetId = Number(args[1]);

  if (Number.isNaN(targetId)) {
    return ctx.reply(
      "❌ Invalid USER_ID"
    );
  }

  await supabase
    .from("users")
    .update({
      is_banned: false,
    })
    .eq("telegram_id", targetId);

  await ctx.reply(
    `✅ User unbanned

👤 User ID: ${targetId}`
  );
});
