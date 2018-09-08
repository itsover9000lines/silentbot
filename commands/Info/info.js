const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let string = '';
    bot.guilds.forEach(guild => {
    string += guild.name + '\n';})
    let bt = bot.user.username;
    let botembed = new Discord.RichEmbed()
        .setDescription("[Bot Support](https://discord.gg/4m7fmYA)")
        .setColor("#20C3FF")
        .setThumbnail(bicon)
        .addField("Bot Name", "<@" + `${bot.user.id}` + ">", true)
        .addField("Bot Invite Link", `[Bot Invite](https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&permissions=2146958839&scope=bot)`, true)
        .addField("ID:", "478653381922127895", true)
        .addField(`Users`, `${bot.users.size.toLocaleString()}`, true)
        .addField(`Servers`, `${bot.guilds.size.toLocaleString()}`, true)
        .addField("Created On", "Aug 13, 2018", true)
        .setFooter("Creator of the Bot: SilentMemer#7124");
    message.channel.send(botembed);
}

module.exports.help = {
    name: "info"
}
