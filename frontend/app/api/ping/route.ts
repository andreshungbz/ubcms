// frontend/app/api/ping/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(`${process.env.DIRECTUS_API_URL}`, {
      redirect: 'manual',
    });

    if (res.status >= 400) {
      throw new Error(`Strapi unhealthy (status ${res.status})`);
    }

    return NextResponse.json({
      status: 'ok',
      directusStatus: res.status,
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: 'error',
        message: (err as Error).message,
      },
      { status: 500 },
    );
  }
}
