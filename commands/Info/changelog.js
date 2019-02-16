const {Command} = require('discord.js-commando'),
 Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "changelog",
            memberName: "changelog",
            aliases: [],
            examples: [`${client.commandPrefix}changelog`],
            description: "This will display the changes to the most recent update.",
            group: "info"
        })
    }
    async run(message) {
        let embed = new Discord.RichEmbed()
        .setAuthor("Change Log")
        .setColor("#20C3FF")
        .addField(`2/16/19 Update
        -Added change log command
        -Added cumstom embed command`)
        .addField(`Check here for what future updates look like!`, `[Click Here](http://bit.ly/2ST5Oid)`)
    message.channel.send(embed);
    }
}
