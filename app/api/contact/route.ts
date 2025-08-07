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
      to: process.env.NODEMAILER_RECIEVER, // Where the email will be sent
      subject: `Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 0;">
    
    <!-- Header -->
    <div style="background-color: #2563eb; padding: 25px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px; font-weight: normal;">New Contact Form Submission</h1>
    </div>
    
    <!-- Content -->
    <div style="padding: 30px; background-color: #ffffff; border: 1px solid #e5e5e5;">
      
      <!-- Contact Information -->
      <div style="margin-bottom: 30px;">
        <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 16px; font-weight: bold; padding-bottom: 5px; border-bottom: 2px solid #e5e5e5;">Contact Information</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <tr>
            <td style="padding: 10px 15px 10px 0; width: 25%; font-weight: bold; color: #666666; vertical-align: top;">Name:</td>
            <td style="padding: 10px 0; color: #333333; border-bottom: 1px solid #f0f0f0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 15px 10px 0; font-weight: bold; color: #666666; vertical-align: top;">Email:</td>
            <td style="padding: 10px 0; color: #333333; border-bottom: 1px solid #f0f0f0;">
              <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 15px 10px 0; font-weight: bold; color: #666666; vertical-align: top;">Phone:</td>
            <td style="padding: 10px 0; color: #333333; border-bottom: 1px solid #f0f0f0;">
              ${phone ? `<a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>` : 'Not provided'}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 15px 10px 0; font-weight: bold; color: #666666; vertical-align: top;">City:</td>
            <td style="padding: 10px 0; color: #333333;">${city || 'Not provided'}</td>
          </tr>
        </table>
      </div>
      
      <!-- Inquiry Details -->
      <div style="margin-bottom: 30px;">
        <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 16px; font-weight: bold; padding-bottom: 5px; border-bottom: 2px solid #e5e5e5;">Inquiry Details</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <tr>
            <td style="padding: 10px 15px 10px 0; width: 25%; font-weight: bold; color: #666666; vertical-align: top;">Subject:</td>
            <td style="padding: 10px 0; color: #333333; border-bottom: 1px solid #f0f0f0; font-weight: 500;">${subject}</td>
          </tr>
          <tr>
            <td style="padding: 10px 15px 10px 0; font-weight: bold; color: #666666; vertical-align: top;">Requirement:</td>
            <td style="padding: 10px 0; color: #333333;">${requirement || 'Not specified'}</td>
          </tr>
        </table>
      </div>
      
      <!-- Message -->
      ${message ? `
        <div style="margin-bottom: 30px;">
          <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 16px; font-weight: bold; padding-bottom: 5px; border-bottom: 2px solid #e5e5e5;">Message</h3>
          <div style="background-color: #f8f9fa; padding: 20px; border: 1px solid #e5e5e5; margin-top: 10px;">
            <p style="margin: 0; color: #333333; line-height: 1.5; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      ` : ''}
      
      <!-- Action Buttons -->
      <div style="margin-top: 30px; padding: 20px 0; border-top: 1px solid #e5e5e5; text-align: center;">
        <a href="mailto:${email}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-size: 14px; font-weight: normal; display: inline-block; margin: 0 5px;">Reply via Email</a>
        ${phone ? `<a href="tel:${phone}" style="background-color: #16a34a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-size: 14px; font-weight: normal; display: inline-block; margin: 0 5px;">Call</a>` : ''}
      </div>
    </div>
    
    <!-- Footer -->
    <div style="background-color: #f8f9fa; padding: 15px; text-align: center; border-top: 1px solid #e5e5e5;">
      <p style="color: #666666; font-size: 12px; margin: 0;">This email was automatically generated from your website contact form.</p>
      <p style="color: #999999; font-size: 11px; margin: 5px 0 0 0;">Submitted on ${new Date().toLocaleString()}</p>
    </div>
  </div>
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