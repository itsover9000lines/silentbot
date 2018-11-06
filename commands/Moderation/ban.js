const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!bUser) return message.channel.send("Couldn't find that user, try again maybe?");
    let bReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permission to use this command.");
    if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I cannot ban that user!");

    let banEmbed = new Discord.RichEmbed()
        .setDescription("Member Banned")
        .setColor("#ff0000")
        .addField("Banned User", `${bUser}`, true)
        .addField("Moderator", `<@${message.author.id}>`, true) 
        .addField("Reason For Ban", bReason)
        .setFooter(`${bUser.id}`)
        .setThumbnail("https://cdn.discordapp.com/attachments/464045067645091842/479298280883486723/banhammer.gif");

    let incidentchannel = message.guild.channels.find(c => c.name === "silent-log") || message.guild.channels.find(c => c.name === "bot-spam")
    if (!incidentchannel) return message.channel.send("Can't find **silent-log** to log in.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
    message.delete().catch();
}

module.exports.help = {
    name: "ban"
}
