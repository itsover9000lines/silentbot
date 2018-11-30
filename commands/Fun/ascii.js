const { Command } = require('discord.js-commando'),
    Discord = require('discord.js'),
    figlet = require('figlet');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "ascii",
            memberName: "ascii",
            aliases: [],
            examples: [`${client.commandPrefix}ascii <Text Here>`],
            description: "Makes text into ascii form.",
            group: "fun",
            args: [
                {
                    key: 'content',
                    prompt: 'Please provide text.',
                    type: 'string'
                }
            ]
        })
    }
    async run(message, { content }) {
        figlet(content, (err, data) => {
            message.channel.send(data, {
                code: 'ascii'
            })

        })
    }
}
