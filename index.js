const Discord = require("discord.js")
const client = new Discord.Client()
const commands = require("./handlers/cmds");
const events = require("./handlers/events");

client.commands = new Discord.Collection();

commands.run(client);
events.run(client);

client.login("TOKEN")