const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
        .setColor("#7EC0EE")
        .addField(`Commands List`, `[Moderation](https://hastebin.com/ejelacuzux.js) \n [Info](https://hastebin.com/efesokulom.sql) \n [Fun](https://hastebin.com/viqolapiso.makefile)`)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    message.channel.send(botembed);
};


module.exports.help = {
    name: "help"
}
