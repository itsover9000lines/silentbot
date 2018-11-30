const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "id",
            memberName: "id",
            aliases: [],
            examples: [`${client.commandPrefix}id`],
            description: "Gets the ID for the mentioned user.",
            group: "moderation",
            args: [
                {
                    key: 'content',
                    prompt: 'Please mention a user.',
                    type: 'member'
                }
            ]
        })
    }
    async run(message, {content}) {
    let member = content
    const embed = new Discord.RichEmbed()
        .setColor(`#20C3FF`)
        .addField(`User`, member.user, true)
        .addField(`ID`, member.id, true)
    message.channel.send(embed);
    }
}
