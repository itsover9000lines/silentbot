const {Command} = require('discord.js-commando'),
 Discord = require('discord.js');
const randomPuppy = require('random-puppy');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "yum",
            memberName: "yum",
            aliases: [],
            examples: [`${client.commandPrefix}yum`],
            description: "YUMMY FOOD",
            group: "fun"
        })
    }
    async run(message) {
    const subreddits = [
        "foodporn",
        "todayIate"
    ]

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor(`#20C3FF`)
                .setDescription(`FOOOOOOOOOOOOOOOOOOOOOOOOOOOOOD`)
            message.channel.send(embed).then(message => {
                embed.setColor(`#20C3FF`)
                embed.setDescription(`yumm [Click Here](${url})`)
                embed.setImage(url)
                message.edit(embed);
            })
        })
    }
}
