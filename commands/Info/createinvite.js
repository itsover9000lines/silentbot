const {Command} = require('discord.js-commando'),
 Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "invite",
            memberName: "invite",
            aliases: ["inv"],
            examples: [`${client.commandPrefix}invite`],
            description: "Creates an invite for the Discord.",
            group: "info"
        })
    }
    async run(message) {
    var options = {
        maxAge: 0
    };
    const useruser = "Command Ran By: " + message.author.username;
    const usermade = message.author;
    const userurl = message.author.avatarURL;
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription(`<a:Dots:426956230582599690> Creating......`)
        .setTimestamp()
    message.channel.send(botembed).then(message => {
    message.channel.createInvite(options).then(i => {
        botembed.setColor("#20C3FF")
        botembed.setDescription(`Created a Invite For you ${usermade}. \n https://discord.gg/${i.code}`)
        botembed.setFooter(useruser, userurl)
        botembed.setTimestamp()
        message.edit(botembed)
        })
    })
    }
}
