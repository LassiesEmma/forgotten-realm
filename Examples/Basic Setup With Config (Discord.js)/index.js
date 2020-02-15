const { Client } = require("discord.js");
const { config } = require("dotenv");

const client = new Client({
    disableEveryone: true
});

config({
    path: __dirname + "/.env"
});

client.on("ready", () => {
console.log(`${client.user.username} is now online!`);
});

client.login(process.env.TOKEN);