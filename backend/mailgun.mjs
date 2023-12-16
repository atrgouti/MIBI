import dotenv from "dotenv";
import Mailgun from "mailgun-js";

dotenv.config();

const { VITE_MAILGUN_API_KEY, VITE_MAILGUN_DOMAIN } = process.env;
const mailgun = () =>
  Mailgun({
    apiKey: VITE_MAILGUN_API_KEY,
    domain: VITE_MAILGUN_DOMAIN,
  });

export const sendMail = (req, res) => {
  const { name, email, number, subject, message } = req.body;
  mailgun()
    .messages()
    .send(
      {
        from: `excited-user <${email}>`,
        to: `bilalatrgouti2002@gmail.com`,
        subject: `${subject}`,
        html: `<p>name: ${name} <br> number: ${number} <br> message: ${message}</p>`,
      },
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: "Error in sending email" });
        } else {
          console.log(body);
          res.send({ message: "Email sent successfully" });
        }
      }
    );
};
