import nodemailer from "nodemailer";

export const sendEmail = async ({ Name, Email, Message }) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: Email,
    subject: `New Enquiry from ${Name}`,
    html: `
      <h2>New Enquiry Received</h2>
      <p><strong>Name:</strong> ${Name}</p>
      <p><strong>Email:</strong> ${Email}</p>
      <p><strong>Message:</strong></p>
      <p>${Message}</p>
      <hr/>
      <p>This email was sent from your website enquiry form.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};