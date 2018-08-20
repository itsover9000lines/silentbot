const Discord = require('discord.js');

if (message.content.startsWith(prefix + "global")) {
    let xoargs = message.content.split(" ").slice(1);
    let xo03 = xoargs.join(" ")
    var xo02 = message.guild.channels.find('name', 'general');
    if (!xo02) return message.reply(`General chat was not found.`)
    if (message.channel.name !== 'global-chat') return message.reply('You can not run this here!')
                if (!xo03) return message.reply('You must write a message")
                    message.delete();
                    var tchat_embed = new Discord.RichEmbed()
                        .setColor("0x00bee8")
                        .setTitle("SilentBot Global")
                        .setThumbnail(`${message.author.displayAvatarURL}`)
                        .addField("Name of user:", message.author.username + "#" + message.author.discriminator, true)
                        .addField("From server", message.guild.name, true)
                        .addField("Message:", "**-----------------------------------------------------------**")
                        .addField(`${xo03}`, `**------------------------------------------------------------**`)
                        .setTimestamp()
                    bot.channels.findAll('name', 'channel name').map(channel => channel.send(tchat_embed))
                }
