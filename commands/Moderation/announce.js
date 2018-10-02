const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER")) return;
let sIcon = message.guild.iconURL;
//let change = message.guild.channels.find(c => c.name === "discord-updates") || message.guild.channels.find(c => c.name === "updates") || message.guild.channel.find(c => c.name === "🔎discord-updates🔍") || message.guild.channel.find(c => c.name === "change-log") || message.guild.channel.find(c => c.name === "changelog") || message.guild.channel.find(c => c.name === "changes")
let botembed = new Discord.RichEmbed()
    .setColor(`#FF000`)
    .setDescription(`${args[0]} Update \n\n ${args.join(' ').slice(args[0])}`)
    .setThumbnail(sIcon)
    .setAuthor(`${message.guild.name}`, `${message.guild.iconURL}`)
    .setFooter(`${message.author.username}`, message.author.avatarURL)
message.channel.send(botembed);
message.delete().catch();
}
module.exports.help = { 
    name: "change",
    names: "announce"
}
