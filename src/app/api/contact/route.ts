import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { error: "Geçersiz istek" },
      { status: 400 },
    );
  }

  return NextResponse.json({
    success: true,
    receivedAt: new Date().toISOString(),
  });
}
