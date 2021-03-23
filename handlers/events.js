const { readdirSync } = require("fs");
const { join } = require("path");
const eventsPath = join(__dirname, "..", "events");

module.exports.run = (client) => {
	const eventFiles = readdirSync(eventsPath);
	for (const eventFile of eventFiles) {
		const event = require(`${eventsPath}/${eventFile}`);
		const eventName = eventFile.split(".").shift();
		client.on(eventName, event.bind(null, client))
	}
	console.log("All events loaded")

}