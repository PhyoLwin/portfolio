import nodemailer from 'nodemailer';

export const TRANSPORTER = nodemailer.createTransport({
  service: 'Outlook365', // e.g., 'gmail', 'Outlook365'
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
});
