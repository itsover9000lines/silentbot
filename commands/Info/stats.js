const {Command} = require('discord.js-commando'),
 Discord = require('discord.js');
const { version } = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "stats",
            memberName: "stats",
            aliases: [],
            examples: [`${client.commandPrefix}stats`],
            description: "Shows stats for the bot.",
            group: "info"
        })
    }
    async run(message) {
    let bot = this.client
    const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    const embed = new Discord.RichEmbed()
        .setColor(`#20C3FF`)
        .setThumbnail(bot.user.avatarURL)
        .addField(`Memory Usage`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
        .addField(`Bot Version`, `1.7.0`, true)
        .addField(`Uptime`, `${duration}`, true)
        .addField(`Users`, `${bot.users.size.toLocaleString()}`, true)
        .addField(`Servers`, `${bot.guilds.size.toLocaleString()}`, true)
        .addField(`Channels`, `${bot.channels.size.toLocaleString()}`, true)
        .addField(`Discord.js Version`, `v${version}`, true)
        .addField(`Node Version`, `${process.version}`, true)
    message.channel.send(embed);
    }
}
