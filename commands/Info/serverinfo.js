const {Command} = require('discord.js-commando'),
 Discord = require('discord.js');
function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "serverinfo",
            memberName: "serverinfo",
            aliases: [],
            examples: [`${client.commandPrefix}serverinfo`],
            description: "Shows information on the server.",
            group: "info"
        })
    }
    async run(message) {
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": "Brazil",
        "eu-central": "Central Europe",
        "singapore": "Singapore",
        "us-central": "U.S. Central",
        "sydney": "Sydney",
        "us-east": "U.S. East",
        "us-south": "U.S. South",
        "us-west": "U.S. West",
        "eu-west": "Western Europe",
        "vip-us-east": "VIP U.S. East",
        "london": "London",
        "amsterdam": "Amsterdam",
        "hongkong": "Hong Kong"
    };
    let serverSize = message.guild.memberCount;
    let botCount = message.guild.members.filter(m => m.user.bot).size;
    let humanCount = serverSize - botCount;
    let sIcon = message.guild.iconURL;
    let serverEmbed = new Discord.RichEmbed()
        .setTitle("Server Information")
        .setColor("#20C3FF")
        .setAuthor("Command Ran By: " + message.author.username, message.author.avatarURL)
        .addField("Server Owner", `<@${message.guild.owner.user.id}>`, true)
        .addField("Created", `${message.guild.createdAt.toString().substr(0, 15)},\n${checkDays(message.guild.createdAt)}`, true)
        .setThumbnail(sIcon)
        .addField("Region", region[message.guild.region], true)
        .addField(`Discord Partner`, `${message.guild.features.length === 0 ? 'No' : `Yes, features: ${message.guild.features.map(feature => `\`${feature}\``).join(', ')}`}`, true)
        .addField("Verification Level", verifLevels[message.guild.verificationLevel], true)
        .setTimestamp()
        .addField("Total Members", message.guild.memberCount, true)
        .addField('Member Status', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`)
        .addField("Total Channels", message.guild.channels.size, true)
        .addField("Total Roles", message.guild.roles.size, true)
        .addField("Total Bots", botCount, true)
        .addField("Total Humans", humanCount, true)
        .addField("Server Roles", `Type **s!roles** to see \nthe Server roles`, true)
        .addField("Server Emojis", `Type **s!emojis** to see \nthe Servers Emojis`, true)
        .setFooter(`ID: ${message.guild.id}`, sIcon);
    message.channel.startTyping();
    message.channel.send(serverEmbed);
    await message.channel.stopTyping();
    }
}
