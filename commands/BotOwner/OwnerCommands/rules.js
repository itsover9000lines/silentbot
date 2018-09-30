const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
if (message.author.id !== "203259894743302145") return;
const embed = new Discord.RichEmbed()
.setColor(`#87CEFA`)
.setTitle(`RULES`)
.setDescription(`
**Please follow these rules and guidelines so we can have a family-friendly discord that believes in having fun, being kind, and respecting others.**

• Have fun and respect others
• No profanity, swearing or cussing (voice, text, emoticons)
• No spamming, trolling, hacking or exploiting games 
• No discussion of spamming, trolling, hacking and exploiting games
• Respect and follow the directions of Admins
• These topics are not to be discussed: 
　　　　o Politics
　　　　o Religion
　　　　o Race
　　　　o Gender
• Bullying is NOT allowed
• Please be aware of your microphone settings
• Be respectful when others are talking, try not to talk at same time
• Do not include mean or inflammatory symbols in names and posts
• Please do not make loud noises or playing instruments
Lease contact an Admin if you require additional information or clarification or if you do not understand these rules and guidelines.

**The following actions result in an immediate and permanent ban:**

• Impersonating another person, YouTuber, or bot
• Releasing, posting, telling another person’s personal information
• Releasing your own personal information such as email etc
• Racist/Racial, gender, religious slurs aimed to hurt another`)
.setFooter(`*Rules subject to change`)
message.channel.send(embed);
}
module.exports.help = {
    name: "rules"
}
