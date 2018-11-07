const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let botembed = new Discord.RichEmbed()
        .setColor("#20C3FF")
        .addField(`Website`, `[Link](https://silentbot.tk/)`)
        .addField(`Commands List`, `[Patreon](http://bit.ly/2o7Tvxr) \n [Commands](http://bit.ly/2xnFH6r)`)
        .addField(`Subscribe to the creator on YouTube!`, `[Subscribe](http://bit.ly/aljsdkla)`)
        .addField(`Follow him on twitch!`, `[Follow](http://bit.ly/2QysMqZ)`)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    message.author.send(botembed);
    
    await message.react("✅");
};


module.exports.help = {
    name: "help"
}
