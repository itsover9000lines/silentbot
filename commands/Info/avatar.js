const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "avatar",
            memberName: "avatar",
            aliases: [],
            examples: [`${client.commandPrefix}avatar`],
            description: "Grabs the avatar of the mentioned user.",
            group: "info",
            args: [
                {
                    key: 'user',
                    prompt: 'Please mention a user.',
                    type: 'member'
                }
            ]
        })
    }
    async run(message, {user}) {
        let embed = new Discord.RichEmbed()
        .setColor("#20C3FF")
        .setImage(`${user.user.displayAvatarURL}`)
        .setAuthor(user.user.tag , user.user.displayAvatarURL)
        .setFooter("Command Ran By: " + message.author.username, message.author.displayAvatarURL);


        message.channel.send(embed)
    }
}
