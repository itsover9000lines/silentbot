const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const botembed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setAuthor("Command Ran By: " + message.author.username, message.author.displayAvatarURL)
        .setDescription("Shutting Down :wave:")
        .setFooter("Shutting Down will take a few minutes for the bot to appear offline.", message.author.displayAvatarURL)
    console.log("Bot Has Gone Offline.");
    if (message.author.id !== "203259894743302145") return;
    await message.react("✅");
    await message.channel.send(botembed);
    message.delete().catch();
    bot.commands.forEach( async cmd => {
        await bot.unloadCommand(cmd);
    });
    process.exit(1);
}
module.exports.help = {
    name: "shutdown"
}
