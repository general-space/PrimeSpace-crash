import { bot } from "./index";
import {
  registerUser,
} from "../lib/userService";

bot.start(async (ctx) => {
  const telegramId =
    ctx.from.id;

  const username =
    ctx.from.username ||
    `user_${telegramId}`;

  await registerUser(
    telegramId,
    username
  );

  await ctx.reply(`
🚀 Welcome to PrimeSpace Crash

👤 ${username}

💰 Balance: 0 Coin

Use /play to start.
`);
});
