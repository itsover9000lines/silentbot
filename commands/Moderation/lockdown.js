const Discord = require('discord.js');
const ms = require('ms');
module.exports.run = async (bot, message, args) => {
    const nopermembed = new Discord.RichEmbed()
        .setColor(`#FF0000`)
        .setDescription(`<@${message.author.id}> You don't have permission to run this command.`)
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(nopermembed);
    message.channel.overwritePermissions(message.guild.id, { 
        SEND_MESSAGES: false,
        READ_MESSAGES: true,
        READ_MESSAGE_HISTORY: true,
        ADD_REACTIONS: false,
        USE_EXTERNAL_EMOJIS: false,
        CREATE_INSTANT_INVITE: false,
        MANAGE_CHANNEL: false,
        MANAGE_PERMISSIONS: false,
        MANAGE_WEBHOOKS: false,
        SEND_TTS_MESSAGES: false,
        MANAGE_MESSAGES: false,
        EMBED_LINKS: false,
        ATTACH_FILES: false,
        MENTION_EVERYONE: false
    });
    const lockembed = new Discord.RichEmbed()
    .setColor(`#FF000`)
    .setDescription(`<@${message.author.id}> This channel hs been locked down, do **s!unlock** to unlock it.`)
    message.channel.send(lockembed)
}
module.exports.help = {
    name: "lockdown"
}
