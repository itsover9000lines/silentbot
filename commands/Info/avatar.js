const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let aTaged = message.mentions.users.first();
    if (!aTaged) {
        return message.channel.send(`Please tag a user!` + "\n **s!avatar @user**");
    }
    let botembed = new Discord.RichEmbed()
        .setColor("#20C3FF")
        .setImage(`${aTaged.displayAvatarURL}`)
        .setAuthor(`${aTaged.username}` , `${aTaged.displayAvatarURL}`)
        .setFooter("Command Ran By: " + message.author.username, message.author.displayAvatarURL);
    message.channel.send(botembed);   
}
module.exports.help = {
    name: "avatar"
};
