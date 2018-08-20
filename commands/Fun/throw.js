const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    const throwuser = message.mentions.users.first() || message.author;
    let replies = [`${message.author.tag}`,
]
    let result = Math.floor((Math.random() * replies.length));
    let embed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription(`Threw **${replies[result]}** at **${throwuser.username}**`)
    message.channel.send(embed);
}
module.exports.help = {
    name: "throw"
}
