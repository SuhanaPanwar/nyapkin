
const axios = require("axios");
require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

// Command 1: /nyapkin-ping

app.command("/nyapkin-ping", async ({ ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;

  await respond({
    response_type: "in_channel",
    text: `Pong!\nLatency: ${latency}ms`
  });
});

// Command 2: /nyapkin-help

app.command("/nyapkin-help", async ({ ack, respond }) => {
  await ack();

  await respond({
    response_type: "in_channel",
    text: `Available Commands:
    
/nyapkin-help - Here are the commands Nyapkin can use!! owo
/nyapkin-catfact - Get a random cat fact o(≧▽≦)o
/nyapkin-ping - Check bot latency! :3`
  });
});

// Command 3: /nyapkin-catfact

app.command("/nyapkin-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");

    await respond({
      response_type: "in_channel",
      text: `Cat Fact:\n${response.data.fact}`
    });

  } catch (err) {
    console.error("Cat fact error:", err.message);

    await respond({
      response_type: "in_channel",
      text: "Nyapkin couldn't find a cat fact! Try again later!! (>_<)"
    });
  }
});

// Start Nyapkin AFTER registering all commands

(async () => {
  await app.start();
  console.log("bot is running!");
})();
