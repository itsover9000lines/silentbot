const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

randomPuppy('memes')
    .then(url => {
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setImage(url)
            .setColor('RANDOM')
        message.channel.send(embed);
    });
