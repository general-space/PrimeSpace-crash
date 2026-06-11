import { bot } from "../../../bot";

export async function POST(
  request: Request
) {
  const update =
    await request.json();

  await bot.handleUpdate(update);

  return Response.json({
    ok: true,
  });
}
