const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //!addrole @andrew Dog Person
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You don't have permission to run this command!");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("I couldn't find that user, check again maybe?");
    let role = args.slice(1).join(" ");
    if (!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return message.reply("Couldn't find that role.");

    if (rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
    await (rMember.addRole(gRole.id));

    try {
        await message.channel.send(`Congrats, you have been given the role ${gRole.name}`)
    } catch (e) {
        message.channel.send(`<@${rMember.id}> have been given the role ${gRole.name}. I've Tried Dming the <@${rMember.id}> but their Dms are Closed.`)
    }
    message.delete().catch();
}

module.exports.help = {
    name: "addrole"
}
