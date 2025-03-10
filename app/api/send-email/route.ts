import { NextRequest, NextResponse } from 'next/server';
import { EmailJSResponseStatus } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../../config/emailjs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, selectedServices, squareMeters } = body;

    // Format the selected services into a bullet list
    const formattedServices = selectedServices?.length
      ? `\n• ${selectedServices.join('\n• ')}`
      : 'No services selected';

    // Format the square meters if provided
    const formattedSquareMeters = squareMeters
      ? `\nSquare Meters: ${squareMeters}`
      : '';

    // Initialize EmailJS with your public key
    emailjs.init(emailConfig.publicKey);

    // Send email using EmailJS
    await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      {
        from_name: name,
        from_email: email,
        phone,
        message,
        services: formattedServices,
        square_meters: formattedSquareMeters,
      }
    );

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Failed to send email:', err);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
