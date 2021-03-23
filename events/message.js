const prefix = "!"

module.exports = async(client, message) => {
	const args = message.content.split(/ +/g);
	const command = args.shift().slice(prefix.length).toLowerCase();
	const cmd = client.commands.get(command)

	if (!message.content.toLowerCase().startsWith(prefix)) return;
	
	if(!cmd) return;

	if (cmd.requirements.userPerms && !message.member.permissions.has(cmd.requirements.userPerms))
		return message.channel.send(`You must have the following permissions: \`${(message.member, cmd.requirements.userPerms)}\``), message.react("❌");
	
    cmd.run(client, message, args)

    // message collector here

    


}
