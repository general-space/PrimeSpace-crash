import { bot } from "./index";
import { registerUser } from "../lib/userService";
import { isUserBanned } from "../lib/banService";

bot.start(async (ctx) => {
  const telegramId = ctx.from.id;

  const banned =
    await isUserBanned(telegramId);

  if (banned) {
    return ctx.reply(
      "🚫 Akun Anda telah diblokir dari PrimeSpace."
    );
  }

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

Gunakan /play untuk memulai.
`);
});
