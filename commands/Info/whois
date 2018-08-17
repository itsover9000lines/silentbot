const Discord = require("discord.js");
const moment = require('moment-timezone');
module.exports.run = async (bot, message, args) => {
    let aTaged = message.mentions.users.first() || message.author;
        let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setThumbnail(`${aTaged.displayAvatarURL}`)
        .setAuthor(aTaged.tag)
        .addField("Name", `<@${aTaged.id}>`, true)
        .addField(`Nitro/Partner`, `${aTaged.avatar.startsWith('a_') ? 'Has Nitro or Partner' : 'Regular User'}`, true)
        .addField("User ID", aTaged.id, true)
        .addField(`Account Creation:`, `${moment(aTaged.createdAt).tz('America/Chicago').format('dddd, MMMM Do YYYY, h:mm:ss a zz')}`)
        .addField(`Joined Server At:`, `${moment(aTaged.joinedAt).tz('America/Chicago').format('dddd, MMMM Do YYYY, h:mm:ss a zz') }`)
        .addField("Status", aTaged.presence.status.toUpperCase(), true)
        .addField(`Game`, aTaged.presence.game ? aTaged.presence.game.name: 'N/A', true)
        .setTimestamp()
    message.channel.send(botembed)
    
}
module.exports.help = {
    name: "whois"
};