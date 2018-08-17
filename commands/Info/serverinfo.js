const Discord = require("discord.js");
function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};
module.exports.run = async (bot, message, args) => {
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": "Brazil",
        "eu-central": "Central Europe",
        "singapore": "Singapore",
        "us-central": "U.S. Central",
        "sydney": "Sydney",
        "us-east": "U.S. East",
        "us-south": "U.S. South",
        "us-west": "U.S. West",
        "eu-west": "Western Europe",
        "vip-us-east": "VIP U.S. East",
        "london": "London",
        "amsterdam": "Amsterdam",
        "hongkong": "Hong Kong"
    };
    let serverSize = message.guild.memberCount;
    let botCount = message.guild.members.filter(m => m.user.bot).size;
    let humanCount = serverSize - botCount;
    let sIcon = message.guild.iconURL;
    let serverEmbed = new Discord.RichEmbed()
        .setTitle("Server Information")
        .setColor("#000FF")
        .setAuthor("Command Ran By: " + message.author.username, message.author.avatarURL)
        .addField("Server Owner", `<@${message.guild.owner.user.id}>`, true)
        .addField("Created", `${message.guild.createdAt.toString().substr(0, 15)},\n${checkDays(message.guild.createdAt)}`, true)
        .setThumbnail(sIcon)
        .addField("Region", region[message.guild.region], true)
        .addField("Verification Level", verifLevels[message.guild.verificationLevel], true)
        .setTimestamp()
        .addField("Total Members", message.guild.memberCount, true)
        .addField("Total Channels", message.guild.channels.size, true)
        .addField("Total Roles", message.guild.roles.size, true)
        .addField("Total Bots", botCount, true)
        .addField("Total Humans", humanCount, true)
        .addField("Server Roles", `Type **s!roles** to see \nthe Server roles`, true)
        .addField("Server Emojis", `Type **s!emojis** to see \nthe Servers Emojis`, true)
        .setFooter(`ID: ${message.guild.id}`, sIcon);
    message.channel.startTyping();
    message.channel.send(serverEmbed);
    await message.channel.stopTyping();
}

module.exports.help = {
    name: "serverinfo"
}
