import { init, send } from '@emailjs/browser';
import { NextRequest, NextResponse } from 'next/server';

init(process.env.EMAILJS_PUBLIC_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, selectedServices, squareMeters } = body;

    await send(
      process.env.EMAILJS_SERVICE_ID || '',
      process.env.EMAILJS_TEMPLATE_ID || '',
      {
        from_name: name,
        from_email: email,
        phone_number: phone,
        message: message,
        selected_services: selectedServices?.join(', ') || '',
        square_meters: squareMeters || '',
      },
      process.env.EMAILJS_PUBLIC_KEY || ''
    );

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
