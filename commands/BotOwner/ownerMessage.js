const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "announce",
            memberName: "announce",
            aliases: [],
            examples: [`${client.commandPrefix}announce`],
            description: "Sends a message to each guild owner.",
            group: "owner",
            ownerOnly: true,
            args: [
                {
                    key: 'content',
                    prompt: 'What do you want to send?',
                    type: 'string'
                }
            ]
        })
    }
    async run(message, {content}) {
        let bot = this.client
        const done = [];

        bot.guilds.forEach(guild => {
            if (!done.includes(guild.ownerID)) {
                bot.users.get(guild.ownerID).send("Hey there! This is an announcement that SilentBot is going to rebrand to a new name, Aspect! This is a message to alert you so that you know it is the same bot, and owner hands have NOT changed. my website https://silentbot.tk/ will auto redirect to my new site, https://aspectbot.netlify.com/ If you have any questions or need assistance, please contact me! (http://bit.ly/2VrX1WU) This is also a reminder that we have a new logging system, do **s!setlog #channel-name** to set it up!")
                    .catch(err => console.error(err));
        
                done.push(guild.ownerID);
            }
        });

    }
}
