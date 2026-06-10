import { bot } from "./index";
import { isOwner } from "./owner";
import { addCoin } from "../lib/database";

bot.command("addcoin", async (ctx) => {
  const telegramId = ctx.from.id;

  if (!isOwner(telegramId)) {
    return ctx.reply("❌ Owner only");
  }

  const args = ctx.message.text.split(" ");

  if (args.length < 3) {
    return ctx.reply(
      "Usage:\n/addcoin USER_ID JUMLAH"
    );
  }

  const targetId = Number(args[1]);
  const amount = Number(args[2]);

  if (
    Number.isNaN(targetId) ||
    Number.isNaN(amount)
  ) {
    return ctx.reply(
      "❌ Invalid USER_ID or amount"
    );
  }

  const newBalance = await addCoin(
    targetId,
    amount
  );

  if (newBalance === null) {
    return ctx.reply(
      "❌ User not found"
    );
  }

  await ctx.reply(
    `✅ Coin added

👤 User ID: ${targetId}
➕ Amount: ${amount.toLocaleString("id-ID")}
💰 Balance: ${newBalance.toLocaleString("id-ID")}`
  );
});
