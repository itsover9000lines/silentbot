
const Discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    console.log(`Bot Has Been Restart By: ` + message.author.username);
    if (message.author.id !== "203259894743302145") return message.channel.reply("You can't do this!");
    await message.react("✅");
    message.delete(1000).catch();
    await bot.destroy().then(bot.login(process.env.BOT_TOKEN))

}
module.exports.help = {
    name: "restart"
}
