import { ServerClient } from "postmark";
import Email from "../models/Email.js";

const client = new ServerClient(process.env.POSTMARK_API_KEY);

export async function sendEmail(req, res) {
  const { to, subject, body } = req.body;

  try {
    const response = await client.sendEmail({
      From: "your-email@example.com",
      To: to,
      Subject: subject,
      TextBody: body,
    });

    const email = new Email({ from: "your-email@example.com", to, subject, body });
    await email.save();

    res.json({ success: true, message: "Email sent", response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCommunicationHistory(req, res) {
  const emails = await find();
  res.json(emails);
}
