const {Command} = require('discord.js-commando'),
 Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "food",
            memberName: "food",
            aliases: [],
            examples: [`${client.commandPrefix}food`],
            description: "I. WANT. FOOOOOOD!!!",
            group: "fun"
        })
    }
    async run(message) {
    const userURL = message.author.avatarURL;
    const usernameid = message.author.username;
    let replies = [
        "https://cdn.discordapp.com/attachments/453315848430419978/492345483012866048/um.gif",
        "https://cdn.discordapp.com/attachments/453315848430419978/492379862447947777/SADCATFINAL.png",
    ]
    let result = Math.floor((Math.random() * replies.length));
    let embed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setDescription("<a:Dots:426956230582599690> Loading...")

    message.channel.send(embed).then(message => {
        embed.setColor("#000FF")
        embed.setDescription("alexa this is so sad")
        embed.setImage(replies[result])
        embed.setFooter("Command Ran By: " + usernameid, userURL)
        message.edit(embed)
    })
    }
}
