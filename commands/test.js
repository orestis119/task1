const Discord = require("discord.js")
const quetstions = require("../jsons/questions.json")
let count = 0

module.exports.run = async(client, message, args) => {
    await message.channel.send("Let's start!")
    await message.channel.send(quetstions[count]) + count++
    const filter = m => m.author.id == message.author.id;
    const collector = message.channel.createMessageCollector(filter, { max: quetstions.length, time: 20000 });

    collector.on('collect', m => {
        if(count == quetstions.length){
            return collector.stop()
        }
        message.channel.send(quetstions[count])
        count++

    });

    collector.on('end', collected => {
        message.channel.send("Thanks for your answers")
        if(count < quetstions.length) return message.channel.send("Den apntises sthn ora sou ksana dokimase!")
        count = 0
        let embedDesc = ""
        let count2 = 0
        collected.forEach((value) => {
            embedDesc += `**Question**: ${quetstions[count2]}\n**Answer**: ${value.content}\n\n`
            count2++
        })

        const channel = client.channels.cache.get(`824036494322434078`)
        embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setDescription(embedDesc)
        channel.send(embed)

    });
}

module.exports.help = {
	name: "form",
	description: "form command",
}

module.exports.requirements = {
	userPerms: []
}