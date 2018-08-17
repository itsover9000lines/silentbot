const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
        .setColor("#7EC0EE")
        .setDescription("Owner Commands")
        .addField(`Commands Silent Can use`, `s!restart \n s!shutdown \n s!setavatar \n s!setname`)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    message.channel.send(botembed);
};


module.exports.help = {
    name: "silentcmds"
}
