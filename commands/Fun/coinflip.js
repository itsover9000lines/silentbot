const {Command} = require('discord.js-commando'),
 Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "coinflip",
            memberName: "coinflip",
            aliases: ["cf"],
            examples: [`${client.commandPrefix}coinflip`],
            description: "Flips a coin.",
            group: "fun"
        })
    }
    async run(message) {
  const rolled = Math.floor(Math.random() * 2) + 1;
  let headembed = new Discord.RichEmbed()
  .setAuthor(`Coin Flip`)
  .addField(`Result`, `You flipped a: **Heads**!`)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setColor("0xff1053");
  let tailembed = new Discord.RichEmbed()
  .setAuthor(`Coin Flip`)
  .addField(`Result`, `You flipped a: **Tails**!`)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setColor("0x00bee8");
  if (rolled == "1")
  {
    message.channel.send(tailembed);
  }
  if (rolled == "2")
  {
    message.channel.send(headembed);
  }
    }
}
