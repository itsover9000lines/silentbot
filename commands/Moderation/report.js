const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "report",
            memberName: "report",
            aliases: [],
            examples: [`${client.commandPrefix}report`],
            description: "Reports a user.",
            group: "moderation",
            args: [
                {
                    key: 'rUser',
                    prompt: 'What user are you reporting?',
                    type: 'member'
                },
                {
                    key: 'reason',
                    prompt: 'What is the reason for this report?',
                    type: 'string'
                }
            ]
        })
    }
    async run(message, {rUser, reason}) {
    let sIcon = message.guild.iconURL;


    let reportEmbed = new Discord.RichEmbed()

        .setTitle("User Report")
        .setColor("#2CE51A")
        .setThumbnail("https://cdn.discordapp.com/attachments/287379270211338240/479404012534235147/reported.gif")
        .setTimestamp()
        .addField("Reported User", `${rUser}`, true)
        .addField("Reported By", `${message.author}`, true)
        .addField("Reported in Channel:", message.channel)
        .addField("Reason", reason);

    let dmEmbed = new Discord.RichEmbed()
        .setTitle("Your Report")
        .setColor("#2CE51A")
        .addField("Reported By", `${message.author}`, true)
        .setThumbnail("https://cdn.discordapp.com/attachments/287379270211338240/479404012534235147/reported.gif")
        .addField("Reported User", `${rUser}`,true)
        .addField("Thank You", "Your report has been given to the moderators of the server, they will get back to you shortly.")



    let reportschannel = message.guild.channels.find(c => c.name === "silent-log") || message.guild.channels.find(c => c.name === "bot-spam")
    if (!reportschannel) return message.channel.send("Couldn't find silent-log.");

    message.delete().catch();

    reportschannel.send(reportEmbed);
    message.author.send(dmEmbed);
    }
}
