module.exports.run = async(client, message, args) => {
    message.channel.send(`Pong \`${client.ws.ping}\`ms`)
}

module.exports.help = {
	name: "ping",
	description: "ping of bot",
}

module.exports.requirements = {
	userPerms: []
}