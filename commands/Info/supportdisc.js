const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "supportdisc",
            memberName: "supportdisc",
            aliases: ["sd"],
            examples: [`${client.commandPrefix}supportdisc`],
            description: "Gives the link to the support Discord if you need help.",
            group: "info"
        })
    }
    async run(message) {
        let bot = this.client
        let embed = new Discord.RichEmbed()
        .setColor("#20C3FF")
        .addField(`Support`, `[Support Discord](https://discord.gg/4m7fmYA)`)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)

        message.channel.send(embed)
    }
}
