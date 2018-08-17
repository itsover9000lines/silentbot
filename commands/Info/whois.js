const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let aTaged = message.mentions.users.first();
    if (!aTaged) {
        return message.reply(`Please Provide a User :wink:` + "\n **s!whois @user**");
}
        let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setThumbnail(`${aTaged.displayAvatarURL}`)
        .addField("Name", `<@${aTaged.id}>`, true)
        .addField("USERID", aTaged.id, true)
        .addField("Status", aTaged.presence.status, true)
        .setAuthor(`${aTaged.aTagedname}`, `${aTaged.displayAvatarURL}`)
        .setFooter("Joined At" + aTaged.createdAt)
        .setTimestamp(aTaged.createdAt)
    message.channel.send(botembed);
}
module.exports.help = {
    name: "whois"
};