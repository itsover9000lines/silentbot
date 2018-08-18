const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
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

module.exports.help = {
  name: "coinflip"
}
