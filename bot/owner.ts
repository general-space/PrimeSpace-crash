const ownerId = process.env.OWNER_ID;

if (!ownerId) {
  throw new Error(
    "OWNER_ID is missing"
  );
}

const OWNER_ID = Number(ownerId);

export function isOwner(
  telegramId: number
) {
  return telegramId === OWNER_ID;
}
