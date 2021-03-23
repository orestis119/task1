const { readdirSync } = require("fs");
const { join } = require("path");
const cmdsPath = join(__dirname, "..", "commands" );

module.exports.run = (client) => {
	for (const cmd of readdirSync(cmdsPath).filter(cmd => cmd.endsWith(".js"))) {
		const prop = require(`${cmdsPath}/${cmd}`);
		client.commands.set(prop.help.name, prop);
    }
    console.log("All comamnds loaded")
}