const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "ban",
            memberName: "ban",
            aliases: ["b"],
            examples: [`${client.commandPrefix}ban @user <reason here>`],
            description: "Bans the user mentioned.",
            group: "moderation",
            guildOnly: true,
            userPermissions: ["BAN_MEMBERS"],
            args: [
                {
                    key: "member",
                    prompt: "what member do you want me to ban?",
                    type: "member"
                },
                {
                    key: 'reason',
                    prompt: 'What is the reason for this ban?',
                    type: 'string'
                }
            ]
        })
    }
    async run(message, { member, reason }) {
        if (member.user.id === message.author.id) return message.say(`You can't ban yourself...`)
        if (member.hasPermission("MANAGE_MESSAGES")) return message.say("**ERROR**: Cannot ban that user because they are a moderator of the server.");

        let banEmbed = new Discord.RichEmbed()
            .setTitle(`Action`)
            .setDescription("Member Banned")
            .setColor("#FF0000")
            .addField("Banned User", member, true)
            .addField("Moderator", message.author, true)
            .addField("Reason", reason)
            .setFooter(`${member.id}`)
        let dmembed = new Discord.RichEmbed()
            .setColor(`#FF0000`)
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setTitle(`You have been Banned.`)
            .addField(`Server`, message.guild.name, true)
            .addField(`Member`, member, true)
            .addField(`Moderator`, message.author.tag, true)
            .addField(`Reason`, reason)
            .setTimestamp()
            .setThumbnail(member.user.displayAvatarURL)
            .setFooter(`Banned At`)
        member.user.send(dmembed)
        let modlogs = message.guild.channels.find(c => c.name === "silent-log") || message.guild.channels.find(c => c.name === "bot-spam")
        if (!modlogs) modlogs = message.channel;
        await message.guild.member(member).ban(reason);
        message.delete().catch();
        await modlogs.send(banEmbed)
    }
}
