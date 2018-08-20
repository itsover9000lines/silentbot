const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {
    const userURL = message.author.avatarURL;
    const usernameid = message.author.username;
    let { body } = await superagent
        .get(`https://random.dog/woof.json`);
        let embed = new Discord.RichEmbed()
        .setColor("#7EC0EE")
        .setDescription("Loading floofer, Please Wait.,,,,")

        message.channel.send(embed).then(message => {
            embed.setColor("#7EC0EE")
            embed.setDescription("Here's a Photo of a Dog 😊")
            embed.setImage(body.url)
            embed.setFooter("Command Ran By: " + usernameid, userURL)
            message.edit(embed)
        })
}

module.exports.help = {
    name: "dog"
}
