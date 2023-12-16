import express from "express";
import cors from "cors";
import { sendMail } from "./mailgun.mjs";
import * as paypal from "../backend/paypal-api.mjs";

const corsOptions = {
  origin: "http://localhost:5173",
};
const app = express();
const PORT = 3000;

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/mail", sendMail);

app.post("/my-server/create-paypal-order", async (req, res) => {
  try {
    const order = await paypal.createOrder(req.body); // Added await here
    res.json(order);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/my-server/capture-paypal-order", async (req, res) => {
  const { orderId } = req.body;
  try {
    const captureData = await paypal.capturePayment(orderId); // Added await here
    res.json(captureData);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
