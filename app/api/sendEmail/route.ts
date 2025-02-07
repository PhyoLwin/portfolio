import { TRANSPORTER } from '@/lib/nodemailer';

export async function POST(req: Request) {
  const {
    companyName,
    contact,
    email,
    inflowPath,
    problems,
    outcomes,
    resources,
    budget,
    completion_date,
    satisfied,
    disappointed,
  } = await req.json();

  // Create a transporter object using the default SMTP transport

  // Set up email data
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    to: process.env.NEXT_PUBLIC_RECIPIENT_EMAIL,
    subject: 'New Quotation Request',
    text: `
Company Name: ${companyName}
Contact: ${contact}
Email: ${email}

How did you know about us?
${inflowPath}

What specific problem are you trying to solve by considering IT outsourcing?
${problems}

What is the most important outcome you expect from this project?
${outcomes}}

How are your internal IT resources currently structured, and what aspects do you hope to supplement through outsourcing?
${resources}}

Do you have a rough plan for the project budget?
${budget}

Is there a desired completion date for the project?
${completion_date}

If you have previous experience with IT outsourcing, could you tell us what you were satisfied with and what you found disappointing?
Satisfied:
${satisfied}

Disappointed: 
${disappointed}
`,
  };

  try {
    // Send mail
    await TRANSPORTER.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: 'Error sending email', error }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}
