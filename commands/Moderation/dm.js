const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const nopermembed = new Discord.RichEmbed()
        .setColor(`#7EC0EE`)
        .setDescription(`<@${message.author.id}> You Don't have the Manage Messages Permission!`)
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(nopermembed);
    let Moderatoruser = message.author.id;
    let reason = args.slice(1).join(' ');
    if(!reason) return message.channel.send(`You need to Provide a Reason! <@${message.author.id}>`);
    let rUser = message.mentions.users.first();
    let modlogs = message.guild.channels.find('name', 'silent-log');
    if(!modlogs) return message.channel.send('Cant Find the modlogs Channel');
    if(message.mentions.users.size < 1) return message.channel.send('You need to Mention a user for me to dm them!').catch(console.error);
    message.channel.send(`** ✅ ${rUser.tag} Has been dmed.**`)
    const dmembed = new Discord.RichEmbed()
    .setColor(`#FF0000`)
    .setDescription(`Dm from **${message.guild.name}**: **${reason}**`)
    rUser.send(dmembed)
    await message.delete().catch();
}

module.exports.help = {
    name: "dm"
}
