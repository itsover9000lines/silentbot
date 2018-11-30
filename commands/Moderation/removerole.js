
const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');

module.exports = class AddRoleCommand extends Command {
    constructor(client) {
        super(client, {
            name: "removerole",
            memberName: "removerole",
            aliases: ["rr"],            
            examples: [`${client.commandPrefix}removerole @user <Role Name>`],
            description: "Removes a role from a user",
            group: "moderation",
            args: [
                {
                    key: 'member',
                    prompt: 'What member is the role being removed from?',
                    type: 'member'
                },
                {
                    key: "role",
                    prompt: "What role is being removed?",
                    type: "role"
                }
            ]
        })
    }

    async run(message, { member, role }) {
        let modlogs = message.guild.channels.find(c => c.name === "silent-logs");
        if (!modlogs) modlogs = message.channel;
        if (!member.roles.has(role.id)) return message.say("They don't have that role.");
        await (member.removeRole(role.id));
        let embed = new Discord.RichEmbed()
            .setColor('#000FF')
            .setTitle(`Role Removed`)
            .setAuthor(member.user.tag, member.user.displayAvatarURL)
            .addField(`Role`, role, true)
            .addField(`Member`, member, true)
            .addField(`Moderator`, message.author, true)
            .setThumbnail(member.user.displayAvatarURL)
            .setTimestamp()
        modlogs.send(embed)
    }
};
