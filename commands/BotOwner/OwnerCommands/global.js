const Discord = require('discord.js');

if (message.content.startsWith(prefix + "global")) {
    let xoargs = message.content.split(" ").slice(1);
    let xo03 = xoargs.join(" ")
    var xo02 = message.guild.channels.find('name', 'Channel name');
    if (!xo02) return message.reply(`the channel "channel name" does not exist!`)
    if (message.channel.name !== 'redtchat') return message.reply('command to be made in the "channel name "')
                if (!xo03) return message.reply('You must write a message')
                    message.delete();
                    var tchat_embed = new Discord.RichEmbed()
                        .setColor("#677BC4")
                        .setTitle("RedChat Global")
                        .setThumbnail(`${message.author.displayAvatarURL}`)
                        .addField("Name of user:", message.author.username + "#" + message.author.discriminator, true)
                        .addField("From server", message.guild.name, true)
                        .addField("Message:", "**-----------------------------------------------------------**")
                        .addField(`${xo03}`, `**------------------------------------------------------------**`)
                        .setTimestamp()
                    bot.channels.findAll('name', 'channel name').map(channel => channel.send(tchat_embed))
                }
