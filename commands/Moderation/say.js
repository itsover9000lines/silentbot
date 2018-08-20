const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "203259894743302145")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let botmessage = args.join(" ");
    message.channel.send(botmessage);
    message.delete().catch();
}


module.exports.help = {
    name: "say"
}
