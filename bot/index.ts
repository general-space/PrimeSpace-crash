import { Telegraf } from "telegraf";

const botToken = process.env.BOT_TOKEN;

if (!botToken) {
  throw new Error("BOT_TOKEN is missing");
}

export const bot = new Telegraf(botToken);

import "./commands";

bot.start(async (ctx) => {
  await ctx.reply(
    "🚀 Welcome to PrimeSpace Crash Bot"
  );
});

export async function startBot() {
  await bot.launch();

  console.log(
    "🚀 PrimeSpace Crash Bot Online"
  );
}
