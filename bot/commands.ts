import { bot } from "./index";

bot.command("balance", async (ctx) => {
  await ctx.reply(
    "💰 Balance: 0 Coin"
  );
});

bot.command("profile", async (ctx) => {
  await ctx.reply(
    "👤 Profile Loading..."
  );
});

bot.command("history", async (ctx) => {
  await ctx.reply(
    "📜 History Loading..."
  );
});
