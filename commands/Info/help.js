const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    await message.react("✅");
    
    let botembed = new Discord.RichEmbed()
        .setColor("#20C3FF")
        .addField(`Commands List`, `[Patreon](http://bit.ly/2o7Tvxr) \n [Moderation](https://hastebin.com/ejelacuzux.js) \n [Info](https://hastebin.com/efesokulom.sql) \n [Fun](https://hastebin.com/viqolapiso.makefile)`)
        .addField(`Subscribe to the creator on YouTube!`, `[Subscribe](http://bit.ly/aljsdkla)`)
        .addField(`Follow him on twitch!`, `[Follow](http://bit.ly/2QysMqZ)`)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    message.author.send(botembed);
};


module.exports.help = {
    name: "help"
}
