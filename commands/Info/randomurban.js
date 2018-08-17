const Discord = require('discord.js');
const urban = require('urban');

module.exports.run = async (bot, message, args) => {
    const searchuser = message.author.username;
    const searchuserurl = message.author.avatarURL;
urban.random().first(json => {
        let embed = new Discord.RichEmbed()
            .setColor("#000FF")
            .setDescription("<a:Dots:426956230582599690> Loading the Urban Answer!")
        message.channel.send(embed).then(message => {
            embed.setTitle(`You Searched For: ${json.word}`)
            embed.setColor("#000FF")
            embed.setURL(json.permalink)
            embed.setDescription(json.definition)
            embed.addField(`Example`, `${json.example}`)
            embed.addField("Upvotes", `:thumbsup: ${json.thumbs_up}`, true)
            embed.addField("DownVotes", `:thumbsdown: ${json.thumbs_down}`, true)
            embed.setAuthor(`Written By: ${json.author}`)
            embed.setThumbnail("https://cdn.discordapp.com/attachments/444028025932349441/462579759340322816/ud.png")
            embed.setFooter("Command Ran By: " + searchuser, searchuserurl)
            message.edit(embed);
        })
    });
}
module.exports.help = {
    name: "randomurban"
}