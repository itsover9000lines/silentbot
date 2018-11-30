const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            group: 'info',
            memberName: 'ping',
            description: 'Ping for the bot.',
            examples: ['ping'],
            aliases: ["pong", "pung", "p"],
            guildOnly: false
        });
    }

    async run(msg, client) {
        let loadingembed = new Discord.RichEmbed()
            .setColor("#000FF")
            .setDescription(`Loading...`)
            .setTimestamp()
        const message = await msg.channel.send(loadingembed);
        let embed = new Discord.RichEmbed()
            .setColor("#000FF")
            .addField(`Message Latency`, `${message.createdTimestamp - msg.createdTimestamp}ms`, true)
            .addField(`Bot Latency`, `${Math.round(this.client.ping)}ms`, true)
            .setFooter(this.client.user.username, this.client.user.avatarURL)
        message.edit(embed);
    }
};
