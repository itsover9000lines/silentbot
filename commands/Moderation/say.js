const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "say",
            memberName: "say",
            aliases: [],
            examples: [`${client.commandPrefix}say`],
            description: "Make the bot say anything you want!",
            group: "moderation",
            args: [
                {
                    key: 'botmessage',
                    prompt: 'What would you like the bot to say?',
                    type: 'string'
                }
            ]
        })
    }
    async run(message, {botmessage}) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    message.channel.send(botmessage);
    message.delete().catch();
    }
}
