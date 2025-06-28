import { NextResponse } from 'next/server';
import { sendMail } from '@/app/lib/mail';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Please fill in all required fields'
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Prepare email content
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    const textContent = `
      New Contact Form Submission

      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Subject: ${subject}

      Message:
      ${message}
    `;

    // Send email
    await sendMail({
      to: process.env.CONTACT_EMAIL || 'acunovapvtltd@gmail.com',
      from: email,
      subject: `New Contact Form Message: ${subject}`,
      text: textContent,
      html: htmlContent
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you for your message. We will get back to you soon.'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'An error occurred while sending your message. Please try again later.'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
