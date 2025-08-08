import nodemailer from "nodemailer";
import "dotenv/config";

export const sendEmail = async (to: string, html: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.SEND_EMAIL,
      },
    });

    const info = await transporter.sendMail({
      from: '"BUY ME COFFEE TEAM" <boloroooturshilt@gmail.com>',
      to,
      subject: "Buy Me Coffee",
      text: "Hello",
      html,
    });

    return "success";
  } catch (error) {
    console.log(error);
  }
};
//
