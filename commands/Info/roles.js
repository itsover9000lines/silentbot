const {Command} = require('discord.js-commando'),
 Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "roles",
            memberName: "roles",
            aliases: [],
            examples: [`${client.commandPrefix}roles`],
            description: "Shows all roles for the server.",
            group: "info"
        })
    }
    async run(message) {
    let embed = new Discord.RichEmbed()
            .setColor("#000FF")
            .addField(`Server Roles`, `${message.guild.roles.map(role => role.name).join(', ')}`, true)
            .setFooter(this.client.user.username, this.client.user.avatarURL)
    message.channel.send(embed);
    }
}
