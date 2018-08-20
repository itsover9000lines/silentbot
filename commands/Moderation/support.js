const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
let logchannel = bot.channels.get('480905979341307904')
    var options = {
        maxAge: 0
    };
let Susername = message.author;
let Suseravatar = message.author.avatarURL;
let server = message.guild;
let Schannel = message.channel;
let reason = args.join(' ');
    let embed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription(`Creating......`)
        .setTimestamp()
    message.delete(15000).catch()
    logchannel.send(embed).then(message => {
        Schannel.createInvite(options).then(i => {
            embed.setColor(`RANDOM`)
            embed.setDescription(`${Susername} Has Put in a Support Request!`)
            embed.addField(`User`, Susername, true)
            embed.addField(`User ID`, Susername.id, true)
            embed.addField(`Server`, server.name, true)
            embed.addField(`Server ID`, server.id, true)
            embed.addField(`Channel`, Schannel.name, true)
            embed.addField(`Server Invite`, `https://discord.gg/${i.code}`, true)
            embed.setFooter(`Support Requested At`)
            embed.setTimestamp()
            embed.setThumbnail(Suseravatar)
            embed.addField(`Reason`, reason)
            message.edit(embed)

        })
    }).then(message => {
        Schannel.send(`${Susername} You Message has been given to the bot support team! they will get back to you as soon as possible!`)
    })
}
module.exports.help = {
    name: "support"
}
