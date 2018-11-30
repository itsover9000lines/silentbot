const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "socials",
            memberName: "socials",
            aliases: [],
            examples: [`${client.commandPrefix}socials`],
            description: "Gives social media of the bot, and the creator!",
            group: "info"
        })
    }
    async run(message) {
        let embed = new Discord.RichEmbed()
            .setColor("#20C3FF")
            .setTitle(`Social Media`)
            .setTimestamp()
            .addField(`Follow the bot twitter account!`, `[Follow](http://bit.ly/2qCxo3A)`)
            .addField(`Subscribe to the creator on YouTube!`, `[Subscribe](http://bit.ly/aljsdkla)`)
            .addField(`Follow him on Twitch!`, `[Follow](http://bit.ly/2QysMqZ)`)
            .addField(`Follow his Twitter!`, `[Follow](http://bit.ly/2xxLWoY)`)
            .addField(`Support his patreon here!`, `[Donate](http://bit.ly/2o7Tvxr)`)
            .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)


        message.channel.send(embed)
    }
}
