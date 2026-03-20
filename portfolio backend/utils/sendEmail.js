import nodemailer from "nodemailer";

export const sendEmail = async ({ name, email, message }) => {

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    family: 4, // 👈 FORCE IPv4 (IMPORTANT)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Enquiry from ${name}`,
    html: `
      <h3>Name: ${name}</h3>
      <p>Email: ${email}</p>
      <p>${message}</p>
    `,
  });
};