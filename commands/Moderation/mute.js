const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    const modlogs = message.guild.channels.find(c => c.name === "silent-log") || message.guild.channels.find(c => c.name === "bot-spam")
    if(!modlogs) return message.channel.send("Can't find **silent-log**");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Couldn't find user.");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
    let muterole = message.guild.roles.find(`name`, `Muted Role [${bot.user.username}]`);
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
                    READ_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
    let mutetime = args[1];
    if (!mutetime) return message.reply("You didn't specify a time!");

    await (tomute.addRole(muterole.id));
    let botembed = new Discord.RichEmbed()
    .setColor("#000FF")
    .setAuthor(`${tomute.user.username}`, `${tomute.user.avatarURL}`)
    .setDescription(`<@${tomute.id}> Has been Muted!`)
    .addField("Moderator", message.author.username, true)
    .addField("User Muted",`<@${tomute.id}>`, true)
    .addField("Time", `${ms(ms(mutetime))}`)
    .setTimestamp()
    .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    modlogs.send(botembed);

    setTimeout(function () {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> has been unmuted!`);
    }, ms(mutetime));
    message.delete().catch();
}


module.exports.help = {
    name: "mute"
}
