import { createUser, getUser } from "./database";

export async function registerUser(
  telegramId: number,
  username: string
) {
  const { data } = await getUser(
    telegramId
  );

  if (data) {
    return data;
  }

  await createUser(
    telegramId,
    username
  );

  const result = await getUser(
    telegramId
  );

  return result.data;
}

export async function getProfile(
  telegramId: number
) {
  const { data } = await getUser(
    telegramId
  );

  return data;
}

export async function getBalance(
  telegramId: number
) {
  const { data } = await getUser(
    telegramId
  );

  if (!data) {
    return 0;
  }

  return Number(data.balance);
}
