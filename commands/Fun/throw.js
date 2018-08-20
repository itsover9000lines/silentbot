const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    const throwuser = message.mentions.users.first() || message.author;
    let replies = [`Banana`, `Car`, `Truck`, `Hot Firemen`, `A Building`, 
    `SpongeBob`, 'Patrick', 'Nothing', 'Admins', 'Moderators', 
    `Black Hole`, `Scams` , `Love`, `Hate`, `iPhone`, `Brick`, `Bad Bots`, `Chair`, 
    `Lemons`, `Cake`, `Pringles`, `Gummy Bears`, `Bus`, `Train`, `Yourself`, `Knife`, `UR MOM`,
    `Self Bots`, `A big hug`, `A teddy bear`, `Work`, `My love and effection`, `Memes`, `Happiness`,
    `Money`, `Poverty`, `A fan`, `${message.author.tag}`,
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
