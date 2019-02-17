const {Command} = require('discord.js-commando'),
 Discord = require('discord.js');
const mongoose = require("mongoose");
mongoose.connect(`mongodb://Bot:${process.env.MONGO}@SilentBot-shard-00-00-bty7a.mongodb.net:27017/account?ssl=true&replicaSet=SilentBot-shard-0&authSource=admin&retryWrites=true`, {
    useNewUrlParser: true
});
const XP = require("../../utils/models/money.js")

module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "xp",
            memberName: "xp",
            aliases: [`level`],
            examples: [`${client.commandPrefix}xp`],
            description: "Shows the ammount of xp you have in a server.",
            group: "fun"
        })
    }
    async run(message) {
        XP.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, xp) => {
            if(err) console.log(err);
        let embed = new Discord.RichEmbed()
        .setTitle(message.author.tag)
        .setColor("green")
        .setThumbnail(message.author.displayAvatarURL);
        if(!xp){
            embed.addField(`XP`, `0`, true);
            return message.channel.send(embed);
        }else {
            embed.addField(`XP`, xp.xp, true);
            return message.channel.send(embed);

        }

        })
    }
}
