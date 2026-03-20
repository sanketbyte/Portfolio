import express from "express";
import { sendEmail } from "../utils/sendEmail.js";

const router = express.Router();

router.post("/enquiry", async (req, res) => {
  try {

    const { Name, Email, Message } = req.body;

    if (!Name || !Email || !Message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await sendEmail({ Name, Email, Message });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("Email Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

export default router;