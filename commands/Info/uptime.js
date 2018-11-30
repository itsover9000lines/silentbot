var { Command } = require('discord.js-commando');
const moment = require("moment");
require("moment-duration-format");
const Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "uptime",
            memberName: "uptime",
            aliases: ["ut"],
            examples: [`${client.commandPrefix}uptime`],
            description: "Time bot has been online.",
            group: "info"
        })
    }
    async run(message) {
        const duration = moment.duration(this.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embed = new Discord.RichEmbed()
            .setColor(`#20C3FF`)
            .addField(`Uptime`, `${duration}`, true)
            .setFooter(this.client.user.username, this.client.user.displayAvatarURL)
        message.channel.send(embed);
    }
}
