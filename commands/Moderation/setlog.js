const {Command} = require('discord.js-commando'),
 Discord = require('discord.js');
const settings = require("../../utils/models/settings.js");
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "setchannel",
            memberName: "setchannel",
            aliases: [`setlog`],
            examples: [`${client.commandPrefix}setchannel #channel`],
            description: "Sets the logging channel for the server.",
            group: "moderation",
            userPermissions: ["MANAGE_GUILD"],
            guildOnly: true,
            args: [
              {
                  key: "channel",
                  prompt: "Please say what channel you want me to log in, **EX: s!setchannel #mod-logs**",
                  type: "channel",
                  
              }
          ]
        })
    }
    async run(message, {channel}) {
  settings.findOne({serverID: message.guild.id}, async (err, db) => {
  if(db){
  if(db.log === channel.id) return message.channel.send(`${channel} is already the logchannel for the server`)
  let old = db.log;
  db.log = channel.id;
  db.save().catch(err => console.log(err.stack));
  let e = new Discord.RichEmbed()
  .setColor("#20C3FF")
  .setTitle(`Success`)
  .setDescription(`**Old:** <#${old}>\n**New:** ${channel}`)
  return message.channel.send(e)
}
})
    }
}
