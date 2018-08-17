const Discord = require('discord.js');
const urban = require('urban');

module.exports.run = async (bot, message, args) => {
    const searchuser = message.author.username;
    const searchuserurl = message.author.avatarURL;
    const noresultsembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setDescription(`❌ Sorry, But No Results for That!`)
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    
    const Searchsomethingembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setDescription(`❌ Sorry, But you need to search Something!`)
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    if(args.length < 1) return message.channel.send(Searchsomethingembed);
    let str = args.join(" ");

    urban(str).first(json => {
        if(!json) return message.channel.send(noresultsembed);
        const embed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription("<a:Dots:426956230582599690> Loading the Urban Answer!")
        message.channel.send(embed).then(message =>{
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
    name: "urban"
}