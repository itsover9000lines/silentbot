const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
module.exports = class AvatarCommand extends Command {
    constructor(client) {
        super(client,
            {
                name: "emojis",
                memberName: "emojis",
                group: "info",
                description: "Shows servers emojis",
                examples: [`${client.commandPrefix}emojis`],
                guildOnly: true,
                aliases: ["emotes"]
            });
    }
    async run(msg) {
if (msg.guild.emojis.size === 0) {
        return msg.channel.send('There are no emojis on this server.');
    }
    else if (msg.guild.emojis.map(e => e).join(' ').length > 2048) {
        let s = msg.guild.emojis.map(e => e).join(' ');
        let i = Math.ceil(s.length / 2);
        let partOne = s.slice(0, i).trim();
        let partTwo = s.slice(i + 1, s.length).trim();
        let embed1 = new Discord.RichEmbed()
            .setColor(`#FF000`)
            .setTitle(`Current Server Emojis`)
            .setDescription(`${partOne}`)
        msg.channel.send(embed1);
        let embed2 = new Discord.RichEmbed()
            .setColor(`#FF000`)
            .setDescription(`${partTwo}`)
        msg.channel.send(embed2);
    }
    else {
        let embed = new Discord.RichEmbed()
        .setColor(`#20C3FF`)
        .setTitle(`Current Server Emojis`)
        .setDescription(`${msg.guild.emojis.map(e => e).join(' ')}`)
        msg.channel.send(embed);
    }
}
}
