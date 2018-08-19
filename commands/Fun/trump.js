const Discord = require("discord.js"); // Discord Module Required
exports.run = async (client, message, args1) => { 
  var replys = [
    "https://media.giphy.com/media/xTiTnHXbRoaZ1B1Mo8/giphy.gif",
          "https://media.giphy.com/media/hPPx8yk3Bmqys/giphy.gif",
          "https://media.giphy.com/media/wJNGA01o1Zxp6/giphy.gif",
          "https://media.giphy.com/media/TIyJGNK325XGciFEnI/giphy.gif",
          "https://media.giphy.com/media/O1GhSbro4z4Dm/giphy.gif",

          ];
          let gif = (replys[Math.floor(Math.random() * replys.length)])
          var embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setImage(gif)
          .setFooter('Trump')

  
  message.channel.send(embed)
  console.log("Trump gif succesfully send")}
