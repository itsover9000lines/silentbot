const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "warn",
            memberName: "warn",
            aliases: [],
            examples: [`${client.commandPrefix}warn`],
            description: "Warns the mentioned user.",
            group: "moderation",
            args: [
                {
                    key: 'user',
                    prompt: 'What user would you like me to warn?',
                    type: 'member'
                },
                {
                    key: 'content',
                    prompt: 'What is the reason for this warn?',
                    type: 'string'
                }
            ]
        })
    }
    async run(message, {user, content}) {
    const nopermembed = new Discord.RichEmbed()
        .setColor(`#FF0000`)
        .setDescription(`<@${message.author.id}> You Don't have the Manage Messages Permission!`)
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
    let Moderatoruser = message.author.id;
    let reason = content;
    let rUser = user;
    let modlogs = message.guild.channels.find(c => c.name === "silent-log") || message.guild.channels.find(c => c.name === "bot-spam")
    if(!modlogs) return message.channel.send('Cant Find the modlogs Channel');
    message.channel.send(`** ✅ ${rUser} has been warned.**`)
    const dmembed = new Discord.RichEmbed()
    .setColor(`#FF0000`)
    .setDescription(`You have been warned in **${message.guild.name}** For **${reason}**`)
    rUser.send(dmembed)
    const warnembed = new Discord.RichEmbed()
    .setColor(`#ff0000`)
    .addField(`Warned User`, `${rUser}`, true)
    .addField(`Moderator`, `<@${Moderatoruser}>`, true)
    .addField(`Reason`, `${reason}`)
    .setTimestamp()
    .setFooter(`ID: ` + `${rUser.id}`, rUser.avatarURL)
    modlogs.send(warnembed);
    await message.delete().catch();
    }
}
