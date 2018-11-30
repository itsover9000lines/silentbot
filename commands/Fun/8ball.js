const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "8ball",
            memberName: "8ball",
            aliases: ["8b"],
            examples: [`${client.commandPrefix}8ball <question>`],
            description: "Ask a question, and receive an answer.",
            group: "fun",
            args: [
                {
                    key: 'content',
                    prompt: 'What question do you seek the answer to today?',
                    type: 'string'
                }
            ]
        })
    }
    async run(message, {content}) {
        let replies = ["Yes.", "No", "I don't know", "Ask Again Later", "Maybe"];
        let result = Math.floor((Math.random() * replies.length));
        let question = content
        let ballembed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#20C3FF")
            .addField("Question", question)
            .addField("Answer", replies[result]);
        message.channel.send(ballembed);
    }
}
