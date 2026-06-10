export async function GET() {
  return Response.json({
    app: "PrimeSpace Crash",
    version: "1.0.0",
    status: "online",
  });
}
