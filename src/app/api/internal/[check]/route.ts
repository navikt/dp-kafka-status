import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { check: string } },
) {
  const checkValue = params.check.toLowerCase();

  if (checkValue === "isalive" || checkValue === "isready") {
    return NextResponse.json({ [checkValue]: true });
  } else {
    return new NextResponse(null, { status: 404 });
  }
}
