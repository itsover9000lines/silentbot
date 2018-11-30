const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "throw",
            memberName: "throw",
            aliases: ["toss"],
            examples: [`${client.commandPrefix}throw`],
            description: "Throw something at a user.",
            group: "fun",
            args: [
                {
                    key: 'tUser',
                    prompt: 'What user do you want to throw something at?',
                    type: 'member'
                }
            ]
        })
    }
    async run(message, {tUser}) {
    const throwuser = tUser
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
        .setDescription(`Threw **${replies[result]}** at **${throwuser}**`)
    message.channel.send(embed);
    }
}
