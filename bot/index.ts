import { Telegraf } from "telegraf";

const botToken = process.env.BOT_TOKEN || "";

export const bot = new Telegraf(botToken);

bot.start(async (ctx) => {
  await ctx.reply(
    "🚀 Welcome to PrimeSpace Crash Bot"
  );
});

bot.launch();

console.log(
  "🚀 PrimeSpace Crash Bot Online"
);
