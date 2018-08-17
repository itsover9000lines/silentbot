const Discord = require('discord.js'); 
module.exports.run = async (bot, message, args) => {
let iUser = message.mentions.members.first() || message.author;
const embed = new Discord.RichEmbed()
.setColor(`#7EC0EE`)
.setDescription(`<@${iUser.id}>'s ID is **${iUser.id}**`)
message.channel.send(embed);
}
module.exports.help = {
    name: "id"
}
