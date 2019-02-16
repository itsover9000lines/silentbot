const {Command} = require('discord.js-commando'),
 Discord = require('discord.js');
const settings = require("../../utils/models/settings.js");
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "settings",
            memberName: "settings",
            aliases: [`config`],
            examples: [`${client.commandPrefix}settings`],
            description: "Shows the current settings for the server",
            group: "moderation",
            userPermissions: ["MANAGE_GUILD"],
            guildOnly: true,
        })
    }
    async run(message) {
  settings.findOne({serverID: message.guild.id}, async (err, db) => {
  if(db){
  let e = new Discord.RichEmbed()
  .setColor(message.member.displayColor)
  .setTitle(`Settings`)
  .addField(`Log Channel`, `${db.log ? `<#${db.log}>` : "None"}`)
  return message.channel.send(e)
}else{
 let e = new Discord.RichEmbed()
  .setColor(`#FF0000`)
  .setTitle(`ERROR`)
  .setDescription(`This server doesn't have a server database.`)
  return message.channel.send(e)
}
})
    }
}