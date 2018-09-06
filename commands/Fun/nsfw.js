const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
module.exports.run = async (bot, message, args) => {
    if(!message.channel.nsfw) return;
    const subreddits = [
        "nsfw_hd",
        "HighResNSFW",
        "NSFW_Wallpapers",
        "SexyWallpapers",
        "UHDnsfw"
    ]

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor(`#20C3FF`)
                .setDescription(`Getting ur meme`)
            message.channel.send(embed).then(message => {
                embed.setColor(`#20C3FF`)
                embed.setDescription(`woah thats hot [Click Here](${url})`)
                embed.setImage(url)
                message.edit(embed);
            })
        })
}
module.exports.help = {
    name: "nsfw",
    names: "Nsfw"
}
