import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Email validation helper
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    // Load environment variables
    const apiKey = process.env.RESEND_API_KEY;
    console.log('Environment variables:', {
      NODE_ENV: process.env.NODE_ENV,
      RESEND_API_KEY: apiKey ? 'exists' : 'missing'
    });
    
    if (!apiKey) {
      console.error('RESEND_API_KEY is missing from environment variables');
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(apiKey);

    const body = await req.json();
    console.log('Received form data:', body);

    const {
      name,
      email,
      phone,
      service,
      size,
      details,
      estimatedHours,
      priceRange,
      priceWithoutVAT,
      priceAfterDeduction,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !service || !size) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('Sending email with Resend...');
    
    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Sarker Siivous <onboarding@resend.dev>', // Use this for testing
      to: ['myynti@sarkersiivous.fi'], // Company sales email       
      reply_to: email, // Allow replying directly to the customer   
      subject: `New Cleaning Service Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #27ae60;">New Cleaning Service Inquiry</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333;">Customer Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333;">Service Details</h3>
            <p><strong>Service Type:</strong> ${service}</p>
            <p><strong>Property Size:</strong> ${size}</p>
            <p><strong>Estimated Hours:</strong> ${estimatedHours}</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333;">Price Information</h3>
            <p><strong>With VAT:</strong> ${priceRange}</p>
            <p><strong>Without VAT:</strong> ${priceWithoutVAT}</p>
            <p><strong>After Household Deduction:</strong> ${priceAfterDeduction}</p>
          </div>

          ${details ? `
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333;">Additional Details</h3>
            <p>${details}</p>
          </div>
          ` : ''}
        </div>
      `,
    });

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
