const {Command} = require('discord.js-commando'),
 Discord = require('discord.js');
const superagent = require("superagent");
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "dog",
            memberName: "dog",
            aliases: [],
            examples: [`${client.commandPrefix}dog`],
            description: "Picture of floofer.",
            group: "fun"
        })
    }
    async run(message) {
    const userURL = message.author.avatarURL;
    const usernameid = message.author.username;
    let { body } = await superagent
        .get(`https://random.dog/woof.json`);
        let embed = new Discord.RichEmbed()
        .setColor("#7EC0EE")
        .setDescription("Loading floofer, Please Wait.,,,,")

        message.channel.send(embed).then(message => {
            embed.setColor("#7EC0EE")
            embed.setDescription("Here's a photo of a floofer 😊")
            embed.setImage(body.url)
            embed.setFooter("Command Ran By: " + usernameid, userURL)
            message.edit(embed)
        })

    }
}
