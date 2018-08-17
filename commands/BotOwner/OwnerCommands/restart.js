const Discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setColor("#000FF")
    .addField("Restart Issued", `<@${message.author.id}> Has Restarted the Bot!`)
    .setThumbnail(bot.user.avatarURL)
    .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    .setTimestamp()
    console.log(`Bot Has Been Restart By: ` + message.author.username);
    if (message.author.id !== "203259894743302145") return;
    await message.react("✅");
    await message.channel.send(botembed);
    message.delete(1000).catch();
    fs.writeFile('./log.json', JSON.stringify(`Bot has Been Restarted.`), (err) => {
        if (err) console.log(err)
    });
    process.exit();

}
module.exports.help = {
    name: "restart"
}
