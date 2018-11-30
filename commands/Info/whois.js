const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const moment = require('moment-timezone')
const perms = require('../../utils/perms.json');
module.exports = class WhoisCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'whois',
            memberName: 'whois',
            group: 'info',
            aliases: [],
            description: 'Shows info about the mentioned user.',
            examples: [`${client.commandPrefix}whois @user`],
            guildOnly: true,
            throttling: {
                usages: 2,
                duration: 3
            },
            args: [
                {
                    key: 'member',
                    prompt: 'What member do you want the info about?',
                    type: 'member'
                }
            ]
        })
    }

    async run(msg, { member }) {
        const arrayClean = function (deleteValue, array) {
            for (let val in array) {
                if (array[val] === deleteValue) {
                    array.splice(val, 1);
                    val -= 1;
                }
            }

            return array;
        };
        const allowed = Object.entries(member.permissions.serialize()).filter(([perm, allowed]) => allowed).map(([perm]) => "`" + perms[perm] + "`").join(',   ');

        let embed = new Discord.RichEmbed()
            .setColor(`#20C3FF`)
            .setThumbnail(member.user.displayAvatarURL)
            .setTimestamp()
            .addField(`Mention`, member.user, true)
            .addField(`Tag`, member.user.tag, true)
            .addField(`Name`, member.user.username, true)
            .addField(`Nickname`, member.nickname ? member.nickname : 'No Nickname', true)
            .addField(`User ID`, member.id, true)
            .addField(`Discriminator`, `#${member.user.discriminator}`, true)
            .addField(`Bot`, member.user.bot ? 'Yes' : 'No', true)
            .addField("Status", member.presence.status.toUpperCase(), true)
            .addField(`Game`, member.presence.game ? member.presence.game.name : 'N/A', true)
            .addField(`Avatar URL`, `[Click Here](${member.user.displayAvatarURL})`)
            .addBlankField()
            .addField(`Account Created At`, `${moment(member.user.createdAt).format('dddd, MMMM Do YYYY')}\n${moment(member.user.createdAt).format('h:mm:ss a zz')}`, true)
            .addField(`Joined Server At`, `${moment(member.joinedAt).format('dddd, MMMM Do YYYY')}\n${moment(member.joinedAt).format('h:mm:ss a zz')}`, true)
            .addBlankField()
            .addField('Highest Role', member.roles.size > 1 ? member.highestRole : 'N/A', true)
            .addField('Highest Role Hoisted', member.highestRole.hoist ? "Yes" : "No", true)
            .addField(`**Permissions**`, allowed ? `•\u2000${allowed}` : '•\u2000\None')
            .addField(`Role(s)`, member.roles.size > 1 ? arrayClean(null, member.roles.map((r) => {
                if (r.name !== '@everyone') {
                    return r;
                }

                return null;
            })).join(' | ') : 'None', false)
        msg.say(embed)
    }
}
