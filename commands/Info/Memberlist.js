const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
    let roleName = message.content.split(" ").slice(1).join(" ");
    let membersWithRole = message.guild.members.filter(member => {
        return member.roles.find("name", roleName);
    }).map(member => {
        return `<@${member.user.id}>`;
    })

    let embed = new Discord.RichEmbed({
        "title": `Users with the ${roleName} role`,
        "description": membersWithRole.join("\n"),
        "color": 0xFFFF
    });
    message.channel.send(embed);
}
module.exports.help = {
    name: "memberlist"
}