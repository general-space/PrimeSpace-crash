const OWNER_ID =
  Number(process.env.OWNER_ID);

export function isOwner(
  telegramId: number
) {
  return telegramId === OWNER_ID;
}
