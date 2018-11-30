const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "boop",
            memberName: "boop",
            aliases: [],
            examples: [`${client.commandPrefix}boop`],
            description: "Boops mentioned user.",
            group: "fun",
            args: [
                {
                    key: 'content',
                    prompt: 'What user would you like booped?',
                    type: 'string'
                }
            ]
        })
    }
    async run(message, {content}) {
    let user = content
    let embed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("BOOP", user)
    message.channel.send(embed);
    }
}
