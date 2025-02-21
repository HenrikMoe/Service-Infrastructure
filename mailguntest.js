import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0

async function sendSimpleMessageTemplate() {
  const mailgun = new Mailgun(FormData);

  const mg = mailgun.client({
    username: "api",
    key: process.env.API_KEY || "API_KEY",
    // When you have an EU-domain, you must specify the endpoint:
    // url: "https://api.eu.mailgun.net/v3"
  });

  try {
    const data = await mg.messages.create("jinsei.ai", {
      from: "Mailgun Sandbox <postmaster@jinsei.ai>",
      to: ["Henrik Moe <henrik@jinsei.ai>"],
      subject: "Hello Henrik Moe",
      template: "contracts",
      "h:X-Mailgun-Variables": JSON.stringify({
        test: "test",
      }),
    });
    console.log(data); // logs response data
  } catch (error) {
    console.log(error); // logs any error
  }
}
