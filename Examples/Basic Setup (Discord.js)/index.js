const { Client } = require("discord.js");

const client = new Client({
    disableEveryone: true
});

client.on("ready", () => {
console.log(`${client.user.username} is now online!`);
});

client.login("token");