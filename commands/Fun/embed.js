const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "embed",
            memberName: "embed",
            aliases: [],
            examples: [`${client.commandPrefix}embed`],
            description: "Creates a custom embed.",
            group: "fun",
            args: [
                {
                    key: 'title',
                    prompt: 'What would you like the title to be?',
                    type: 'string'
                    
                },
                {
                    key: 'desc',
                    prompt: 'What would you like the description to be?',
                    type: 'string'
                    
                },
                {
                    key: 'footer',
                    prompt: 'What would you like the footer to be?',
                    type: 'string'
                    
                },
            ]
        })
    }
    async run(message, { title, desc, footer }) {
    let botembed = new Discord.RichEmbed()
        .setColor("#20C3FF")
        .setAuthor(`${title}`)
        .setFooter(`${footer}`)
        .setTimestamp()
        .setDescription(`${desc}`)
    message.channel.send(botembed);
    }
}
