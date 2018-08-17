const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
        .setColor("#7EC0EE")
        .setDescription("This is the Help Information")
        .setTitle(`Moderation Commands`)
        .setDescription(`s!addrole: Add a role with this command
        s!ban: Ban a member with this command
        s!dm: Dm a member with this command
        s!kick: Kick with this command
        s!mute: Mute with this command
        s!purge: Purge messages with this command
        s!removerole: Remove roles with this command
        s!report: Report members with this command
        s!say: Make the bot say something with this command
        s!unban: Unban a member with this comamnd
        s!warn: Warn a member with this command`)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    message.channel.send(botembed);
};


module.exports.help = {
    name: "moderationcmds"
}
