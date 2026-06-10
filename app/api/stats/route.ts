import { supabase } from "../../../lib/supabase";

export async function GET() {
  const { count } = await supabase
    .from("users")
    .select("*", {
      count: "exact",
      head: true,
    });

  return Response.json({
    users: count || 0,
  });
}
