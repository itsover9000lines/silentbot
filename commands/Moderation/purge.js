const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      //m!purge (number of messages here), including the m!purge message
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have permission to use this command.");
      const noembed = new Discord.RichEmbed()
      .setColor("#FF0000")
      .setDescription("Please Provide a number between **1 to 100**")
      .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL);
      const clearembed = new Discord.RichEmbed()
      .setColor("#FF000")
      .setDescription(`Deleted ${args[0]} messages.`)
      .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL);
      if(!args[0]) return message.channel.send(noembed);
      message.channel.bulkDelete(args[0]).then(() => {
          message.channel.send(clearembed).then(msg => msg.delete(5000));
      
        });


}      

module.exports.help = {
    name: "purge",
    names: "prune"
}
