const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const nopermembed = new Discord.RichEmbed()
        .setColor(`#FF0000`)
        .setDescription(`<@${message.author.id}> You Don't have the Manage Messages Permission!`)
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(nopermembed);
    let Moderatoruser = message.author.id;
    let reason = args.slice(1).join(' ');
    if(!reason) return message.channel.send(`You need to Provide a Reason! <@${message.author.id}>`);
    let rUser = message.mentions.users.first();
    let modlogs = message.guild.channels.find(c => c.name === "silent-log") || message.guild.channels.find(c => c.name === "bot-spam")
    if(!modlogs) return message.channel.send('Cant Find the modlogs Channel');
    if(message.mentions.users.size < 1) return message.channel.send('You need to mention a user for me to warn them!').catch(console.error);
    message.channel.send(`** ✅ ${rUser.tag} has been warned.**`)
    const dmembed = new Discord.RichEmbed()
    .setColor(`#FF0000`)
    .setDescription(`You have been warned in **${message.guild.name}** For **${reason}**`)
    rUser.send(dmembed)
    const warnembed = new Discord.RichEmbed()
    .setColor(`#ff0000`)
    .addField(`Warned User`, `<@${rUser.id}>`, true)
    .addField(`Moderator`, `<@${Moderatoruser}>`, true)
    .addField(`Reason`, `${reason}`)
    .setTimestamp()
    .setFooter(`ID: ` + `${rUser.id}`, rUser.avatarURL)
    modlogs.send(warnembed);
    await message.delete().catch();
}

module.exports.help = {
    name: "warn"
}
