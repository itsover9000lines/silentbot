const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

if (msg.content.startsWith(prefix + "global")) {
    let xoargs = message.content.split(" ").slice(1);
    let xo03 = xoargs.join(" ")
    var xo02 = message.guild.channels.find('name', 'silent-log');
    if (!xo02) return message.reply(`The channel "silent-log" does not exist!`)
    if (message.author.id !== "203259894743302145") return message.reply('You are not allowed to use this command.')
                if (!xo03) return message.reply('You must write a message')
                    message.delete();
                    var tchat_embed = new Discord.RichEmbed()
                        .setColor("#677BC4")
                        .setTitle("Important Message From Silent")
                        .setThumbnail(`${message.author.displayAvatarURL}`)
                        .addField("Name of user:", message.author.username + "#" + message.author.discriminator, true)
                        .addField("From server", message.guild.name, true)
                        .addField("Message:", "**-----------------------------------------------------------**")
                        .addField(`${xo03}`, `**------------------------------------------------------------**`)
                        .setTimestamp()
                    bot.channels.findAll('name', 'channel name').map(channel => channel.send(tchat_embed))
                }
}
