import { NextResponse } from 'next/server';

// This redirects from /arvolisaton-siivous to /arvolisaton-siivous/fixed
export function GET() {
  return NextResponse.redirect(new URL('/arvolisaton-siivous/fixed', 'https://sarkersiivous.fi'));
}
