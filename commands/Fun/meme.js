const {Command} = require('discord.js-commando'),
 Discord = require('discord.js');
const randomPuppy = require('random-puppy');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "meme",
            memberName: "meme",
            aliases: [],
            examples: [`${client.commandPrefix}meme`],
            description: "memes pulled from reddit",
            group: "fun"
        })
    }
    async run(message) {
    if(!message.channel.nsfw) return;
    const subreddits = [
        "meme",
        "memes"
    ]

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor(`#20C3FF`)
                .setDescription(`gettin ur meme`)
            message.channel.send(embed).then(message => {
                embed.setColor(`#20C3FF`)
                embed.setDescription(`heres ur meme lulxd [Click Here](${url})`)
                embed.setImage(url)
                message.edit(embed);
            })
        })   
    }
}
