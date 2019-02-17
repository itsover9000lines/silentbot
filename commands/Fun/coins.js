const {Command} = require('discord.js-commando'),
 Discord = require('discord.js');
const mongoose = require("mongoose");
mongoose.connect(`mongodb://Bot:${process.env.MONGO}@SilentBot-shard-00-00-bty7a.mongodb.net:27017/account?ssl=true&replicaSet=SilentBot-shard-0&authSource=admin&retryWrites=true`, {
    useNewUrlParser: true
});
const Money = require("../../utils/models/money.js")

module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "coins",
            memberName: "coins",
            aliases: [`money`],
            examples: [`${client.commandPrefix}coins`],
            description: "Shows the ammount of coins you have in a server.",
            group: "fun"
        })
    }
    async run(message) {
        Money.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, money) => {
            if(err) console.log(err);
        let embed = new Discord.RichEmbed()
        .setTitle(message.author.tag)
        .setColor("green")
        .setThumbnail(message.author.displayAvatarURL);
        if(!money){
            embed.addField(`Coins`, `0`, true);
            return message.channel.send(embed);
        }else {
            embed.addField(`Coins`, money.money, true);
            return message.channel.send(embed);

        }

        })
    }
}
