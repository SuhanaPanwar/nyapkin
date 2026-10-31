# Nyapkin

A silly little Slack bot that lives on Hack Club Nest and runs 24/7, even when my computer is turned off!

I built Nyapkin for Hack Club's Stardance Slack Bot mission. It's my first attempt at building and deploying a Slack bot, and I wanted something simple and cute!

## What can Nyapkin do?

Nyapkin currently has three slash commands:

- `/nyapkin-ping` — Replies with "Pong!" and shows the bot's response latency.
- `/nyapkin-help` — Shows all available commands.
- `/nyapkin-catfact` — Fetches a random cat fact from an external API.

All three commands respond publicly in Slack channels.

## How it works

Nyapkin is built using JavaScript and Node.js.

- **Slack Bolt:** Handles slash commands and Slack interactions.
- **Axios:** Fetches cat facts from the Cat Fact API.
- **dotenv:** Loads private Slack credentials from environment variables.
- **Socket Mode:** Connects the bot to Slack without needing a public HTTP endpoint.
- **Hack Club Nest:** Hosts the bot independently of my laptop.
- **systemd:** Keeps the bot running and restarts it if it stops.

## How to try it

Open the public Slack demo channel linked on my Stardance project page and try one of Nyapkin's three commands.

You'll need access to the Hack Club Slack workspace.

## Challenges and what I learned

Getting Nyapkin deployed was honestly the hardest part.

I had to figure out SSH, install Node.js on Nest, transfer my project through GitHub, set up environment variables, and configure a systemd service.

Another issue was that Slack initially showed my command responses as "Only visible to you." I fixed that by adding `response_type: "in_channel"` to the command handlers.

I learned a lot about debugging, Git, Linux servers, and the difference between running a bot locally and deploying it.

## Future ideas/plans

I'd love to add more interactive commands, random responses, and little surprises to make Nyapkin more fun like hugs and headpats!

For now, I'm just happy that the little guy actually works.

Made for Hack Club Stardance!