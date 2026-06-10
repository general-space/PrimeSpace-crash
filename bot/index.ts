import { Telegraf } from "telegraf";

const botToken =
  process.env.BOT_TOKEN;

if (!botToken) {
  throw new Error(
    "BOT_TOKEN is missing"
  );
}

export const bot =
  new Telegraf(botToken);

import "./start";
import "./commands";
import "./addcoin";
export async function startBot() {
  await bot.launch();

  console.log(
    "🚀 PrimeSpace Crash Bot Online"
  );
}
