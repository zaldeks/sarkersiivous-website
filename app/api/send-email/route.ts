import { EmailJSResponseStatus } from '@emailjs/browser';
import { NextResponse } from 'next/server';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../../config/emailjs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, selectedServices, squareMeters } = body;

    const templateParams = {
      from_name: name,
      from_email: email,
      phone_number: phone,
      message: message,
      selected_services: selectedServices.join(', '),
      square_meters: squareMeters,
    };

    await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      templateParams,
      emailConfig.publicKey
    );

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Failed to send email:', err);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
