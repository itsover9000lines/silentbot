const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry but you don't have the permissions to use this command.");
const embed = new Discord.RichEmbed()
.setColor(`#87CEFA`)
.addField(`Patreon`, [Click Here](https://www.patreon.com/SilenGamer)
.setDescription(`Patreons: None currently, be the first!`)
message.channel.send(embed);
}
module.exports.help = {
    name: "patreon"
}
