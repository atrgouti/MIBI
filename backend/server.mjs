import express from "express";
// import dotenv from "dotenv";
import Mailgun from "mailgun-js";
import cors from "cors";

// dotenv.config();

const mailgun = () =>
  Mailgun({
    apiKey: "c32d99f510cafe2da8859a9e47b7bbde-0a688b4a-24ac2dba",
    domain: "sandboxbca1eaadc4af462cb0f340ed4acb125a.mailgun.org",
  });

const corsOptions = {
  origin: "http://localhost:5173",
};
const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/mail", (req, res) => {
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
});

const port = 4000;
app.listen(port, () => {
  console.log(`App is served at port ${port}`);
});
