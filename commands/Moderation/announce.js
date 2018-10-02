const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER")) return; message.channel.send("You don't have the `MANAGE_MESSAGES` permission.");
let sIcon = message.guild.iconURL;
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
    name: "announce"
}
