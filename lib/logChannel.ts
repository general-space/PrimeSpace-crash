import { bot } from "../bot/index";

const LOG_CHANNEL_ID =
  process.env.LOG_CHANNEL_ID || "";

export async function sendLog(
  message: string
) {
  try {
    await bot.telegram.sendMessage(
      LOG_CHANNEL_ID,
      message,
      {
        parse_mode: "HTML",
      }
    );
  } catch (error) {
    console.error(
      "Failed to send log:",
      error
    );
  }
}
