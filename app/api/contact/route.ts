// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req, res) {
  console.log("Request received at /api/contact");
  try {
    const { name, email, phone, city, requirement, subject, message } = await req.json();

    console.log("Received data:", { name, email, phone, city, requirement, subject, message });

    // Basic validation
    if (!name || !email || !subject) {
      console.log("Validation error: Missing required fields");
      return NextResponse.json({ message: 'Please fill in all required fields' }, { status: 400 });
    }

    // Create a Nodemailer transporter (configure your email service)
    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: Number(process.env.NODEMAILER_PORT),
      secure: process.env.NODEMAILER_SECURE === 'true', // true for 465, false for 587
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false // ONLY use this if you get a certificate error!
      }
    });

    // Email options
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL, // Your email address
      to: process.env.NODEMAILER_EMAIL, // Where the email will be sent
      subject: `Contact Form Submission: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>City:</strong> ${city || 'N/A'}</p>
        <p><strong>Requirement/Course:</strong> ${requirement || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message || 'N/A'}</p>
      `,
    };

    console.log("Email options:", mailOptions);

    // Send the email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (sendError) {
      console.error("Error sending email:", sendError);
      return NextResponse.json({ message: 'Failed to send email: ' + sendError.message }, { status: 500 });
    }

  } catch (error) {
    console.error('General error in API:', error);
    return NextResponse.json({ message: 'Failed to send email due to a server error: ' + error.message }, { status: 500 });
  }
}