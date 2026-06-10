import { bot } from "./index";

bot.command("balance", async (ctx) => {
  await ctx.reply(
    "💰 Balance: Loading..."
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

bot.command("play", async (ctx) => {
  await ctx.reply(
    "🚀 Open PrimeSpace Web App"
  );
});
