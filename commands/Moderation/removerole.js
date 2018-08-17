const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Sorry pal, you can't do that.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("Couldn't find that user, yo.");
    let role = args.slice(1).join(" ");
    if (!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return message.reply("Couldn't find that role.");

    if (!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
    await (rMember.removeRole(gRole.id));

    try {
        await rMember.send(`RIP, you lost the ${gRole.name} role.`)
    } catch (e) {
        message.channel.send(`<@${rMember.id}>, Sorry but you was removed from ${gRole.name} role I've Tried Dming the <@${rMember.id}> but their Dms are Closed.`)
    }
    message.delete().catch();
}

module.exports.help = {
    name: "removerole"
}
