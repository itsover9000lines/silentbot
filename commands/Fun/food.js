const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const userURL = message.author.avatarURL;
    const usernameid = message.author.username;
    let replies = [
        "https://cdn.discordapp.com/attachments/453315848430419978/492345483012866048/um.gif",
        "https://cdn.discordapp.com/attachments/453315848430419978/492379862447947777/SADCATFINAL.png",
    ]
    let result = Math.floor((Math.random() * replies.length));
    let embed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setDescription("<a:Dots:426956230582599690> Loading a PJ Photo, Please Wait.,,,,")

    message.channel.send(embed).then(message => {
        embed.setColor("#000FF")
        embed.setDescription("fooooOOOOO0000000DDDDD")
        embed.setImage(replies[result])
        embed.setFooter("Command Ran By: " + usernameid, userURL)
        message.edit(embed)
    })
}
module.exports.help = {
    name: "food"
}
