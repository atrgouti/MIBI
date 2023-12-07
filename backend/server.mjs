const API_KEY = "c32d99f510cafe2da8859a9e47b7bbde-0a688b4a-24ac2dba";
const DOMAIN = "sandboxbca1eaadc4af462cb0f340ed4acb125a.mailgun.org";

import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: "api", key: API_KEY });

const messageData = {
  from: "excited-user <atrgoutibilal@gmail.com>",
  to: "bilalatrgouti2002@gmail.com",
  subject: "Finally bro",
  text: "i made some progress",
};

client.messages
  .create(DOMAIN, messageData)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
