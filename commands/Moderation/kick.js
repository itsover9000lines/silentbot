const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kUser) return message.channel.send("Cound't find that user!");
    let kReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have permission to run that command.");
    if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I cannot ban that person!");
    let kickembed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setDescription(`Member Kicked`)
    .setFooter(kUser.id)
    .addField(`Kicked User`, kUser, true)
    .addField(`Moderator`, `<@${message.author.id}>`, true)
    .addField(`Channel`, message.channel, true)
    .setTimestamp()
    let kickChannel = message.guild.channels.find(`name`, "modlogs");
    if (!kickChannel) return message.channel.send("Can't find **silent-log** channel to log in.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickembed);
    message.delete().catch();
}

module.exports.help = {
    name: "kick"
}
