import express from "express";
import cors from "cors";
import { sendMail } from "./mailgun.mjs";

const corsOptions = {
  origin: "http://localhost:5173",
};
const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/mail", sendMail);

const port = 4000;
app.listen(port, () => {
  console.log(`App is served at port ${port}`);
});
