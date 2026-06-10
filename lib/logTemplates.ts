import {
  formatCoin,
  formatDate,
} from "./formatters";

export function winLog(data: {
  username: string;
  userId: number;
  bet: number;
  multiplier: number;
  profit: number;
  balance: number;
}) {
  return `
🚀 <b>PRIMESPACE LOG</b>

🎉 WIN

👤 User : @${data.username}
🆔 ID : ${data.userId}

💸 Bet : ${formatCoin(data.bet)}
🚀 Cash Out : x${data.multiplier}

📈 Profit : +${formatCoin(data.profit)}
💰 Balance : ${formatCoin(data.balance)}

🕒 ${formatDate(new Date())}
`;
}

export function lossLog(data: {
  username: string;
  userId: number;
  bet: number;
  crashPoint: number;
  balance: number;
}) {
  return `
🚀 <b>PRIMESPACE LOG</b>

💥 CRASH

👤 User : @${data.username}
🆔 ID : ${data.userId}

💸 Bet : ${formatCoin(data.bet)}
🚀 Crash : x${data.crashPoint}

📉 Loss : -${formatCoin(data.bet)}
💰 Balance : ${formatCoin(data.balance)}

🕒 ${formatDate(new Date())}
`;
}
