const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
const ms = require("ms");
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "mute",
            memberName: "mute",
            aliases: [],
            examples: [`${client.commandPrefix}mute`],
            description: "Mutes mentioned user. [BROKEN]",
            group: "moderation",
            args: [
                {
                    key: 'user',
                    prompt: 'What user would you like to mute?',
                    type: 'member'
                },
                {
                    key: 'time',
                    prompt: 'How long is this mute for?',
                    type: 'string'
                },
                {
                    key: 'reason',
                    prompt: 'What is the reason for this mute?',
                    type: 'string'
                }
            ]
        })
    }
    async run(message, {user, time, reason}) {
    let bot = this.client
    const modlogs = message.guild.channels.find(c => c.name === "silent-log") || message.guild.channels.find(c => c.name === "bot-spam")
    if(!modlogs) return message.channel.send("Can't find **silent-log**");
    let tomute = user
    if (!tomute) return message.reply("Couldn't find user.");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
    let muterole = message.guild.roles.find(`name`, `Muted [${bot.user.username}]`);
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: `Muted Role [${bot.user.username}]`,
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
    let mutetime = time;
    if (!mutetime) return message.reply("You didn't specify a time!");

    await (tomute.addRole(muterole.id));
    let botembed = new Discord.RichEmbed()
    .setColor("#000FF")
    .setAuthor(`${tomute.user.username}`, `${tomute.user.avatarURL}`)
    .setDescription(`✅${tomute.user.tag} Has been Muted!`)
    .addField("Moderator", message.author.username, true)
    .addField("User Muted",`${tomute.user.tag}`, true)
    .addField("Time", `${ms(ms(mutetime))}`)
    .setTimestamp()
    .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    modlogs.send(botembed);

    setTimeout(function () {
        tomute.removeRole(muterole.id);
        message.channel.send(`${tomute.user.tag} has been unmuted!`);
    }, ms(mutetime));
    message.delete().catch();
    }
}
