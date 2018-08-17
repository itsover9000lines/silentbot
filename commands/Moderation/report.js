const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    let rUser = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("Couldn't find that user!");
    let reason = args.join(" ").slice(22);

    let sIcon = message.guild.iconURL;


    let reportEmbed = new Discord.RichEmbed()

        .setTitle("User Report")
        .setColor("#2CE51A")
        .setThumbnail("https://cdn.discordapp.com/attachments/287379270211338240/479404012534235147/reported.gif")
        .setTimestamp()
        .addField("Reported User", `${rUser}`, true)
        .addField("Reported By", `${message.author}`, true)
        .addField("Reported in Channel:", message.channel)
        .addField("Reason", reason);

    let dmEmbed = new Discord.RichEmbed()
        .setTitle("Your Report")
        .setColor("#2CE51A")
        .addField("Reported By", `${message.author}`, true)
        .setThumbnail("https://cdn.discordapp.com/attachments/287379270211338240/479404012534235147/reported.gif")
        .addField("Reported User", `${rUser}`,true)
        .addField("Thank You", "Your report has been given to the moderators of the server, they will get back to you shortly.")



    let reportschannel = message.guild.channels.find(`name`, "silent-log");
    if (!reportschannel) return message.channel.send("Couldn't find silent-log.");

    message.delete().catch();

    reportschannel.send(reportEmbed);
    message.author.send(dmEmbed);


    if (!message.content.startsWith(prefix)) return;



}


module.exports.help = {
    name: "report"
}
