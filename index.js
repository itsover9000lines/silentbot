//=============================================================================================================================================================================================
// Start of the bot requirements etc.

const { CommandoClient } = require('discord.js-commando');
const Discord = require('discord.js');
const settings = require("./utils/models/settings.js");
const mongoose = require('mongoose');
const path = require('path');
const fs = require("fs");
const Money = require("./utils/models/money.js")
const bot = new CommandoClient({
    commandPrefix: "s!",
    unknownCommandResponse: false,
    owner: ["203259894743302145", "505187354546536468"],
    autoReconnect: true
});
const logger = async function(client, guild, embed){
    settings.findOne({serverID: guild.id}, async (err, db) => {
if(db){
if(db.log === "") return;
let log = guild.channels.get(db.log);
if(!log) return;
log.send(embed)
}
})
}
bot.log = logger;
bot.commands = new Discord.Collection();
let cooldown = new Set();
let cdseconds = 2;
bot.login(process.env.BOT_TOKEN)
mongoose.connect(`mongodb://Bot:${process.env.MONGO}@SilentBot-shard-00-00-bty7a.mongodb.net:27017/account?ssl=true&replicaSet=SilentBot-shard-0&authSource=admin&retryWrites=true`, {useNewUrlParser: true});

// End of the Bot Requirements etc.
//=============================================================================================================================================================================================
// Start Of the bot.on Messages.

bot.on("reconnectiong", () => {
    let embed = new Discord.RichEmbed()
        .setColor(`#F2FF02`)
        .setAuthor(bot.user.tag, bot.user.displayAvatarURL)
        .setDescription(`Reconnected`)
    bot.channels.get("510884979262226432").send(embed)
});

bot.on("disconnect", () => {
    let embed = new Discord.RichEmbed()
        .setColor(`#FF0000`)
        .setAuthor(bot.user.tag, bot.user.displayAvatarURL)
        .setDescription(`Disconnected`)
    bot.channels.get("510884979262226432").send(embed)
});

bot.on('ready', () => {
    let embed = new Discord.RichEmbed()
        .setColor(`#FF000`)
        .setAuthor(bot.user.tag, bot.user.displayAvatarURL)
        .setTitle(`Connected`)
    bot.channels.get("510884979262226432").send(embed)

});

bot.on("ready", async guild => {
    require('./status.js')(bot)
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.guilds.forEach(guild => {
        settings.findOne({serverID: guild.id}, async (err, db) => {
       if(!db){
       new settings({
       serverID: guild.id,
       serverName: guild.name,
       log: ""
       }).save().catch(err => console.log(err.stack))
       }
       }) 
       })
});

bot.on("guildMemberAdd", async member => {
    let botembed = new Discord.RichEmbed()
        .setColor("#1CFF00")
        .setAuthor('Member Joined', member.user.avatarURL)
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
        .setDescription(`${member} ${member.user.tag}`)
        .addField("Total Members", member.guild.memberCount, true)
        .setThumbnail(member.user.avatarURL)
    bot.log(bot, message.guild, botembed);

});

bot.on("guildMemberRemove", async member => {
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor('Member Left', member.user.avatarURL)
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
        .setDescription(`${member} ${member.user.tag}`)
        .addField("Total Members", member.guild.memberCount, true)
        .setThumbnail(member.user.avatarURL)
    bot.log(bot, message.guild, botembed);
});
    
bot.on('guildMemberUpdate', async (oldMember, newMember) => {
    if (newMember.nickname === oldMember.nickname) return
    let embed = new Discord.RichEmbed()
        .setColor(`#20C3FF`)
        .setAuthor(newMember.user.tag, newMember.user.avatarURL)
        .setThumbnail(newMember.user.avatarURL)
        .setTitle(`Name Change`)
        .addField(`Old Nickname`, `${oldMember.nickname ? `${oldMember.nickname}` : `${oldMember.user.username}`}`)
        .addField(`New Nickname`, `${newMember.nickname ? `${newMember.nickname}` : `${newMember.user.username}`}`)
        .setTimestamp()
    bot.log(bot, message.guild, botembed);
});

bot.on('messageDelete', message => {
    if (message.author.bot) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTimestamp()
        .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
        .setFooter(`${bot.user.tag}`, `${bot.user.displayAvatarURL}`)
        .setDescription(`_ _►Content: **\`${message.cleanContent}\`** \n ►Channel: <#${message.channel.id}> \n ►Message ID: ${message.id}`)
    bot.log(bot, message.guild, botembed);
});

bot.on('guildCreate', async guild => {
    if(guild.available !== true) return;
    settings.findOne({serverID: guild.id}, async (err, db) => {
    if(!db){
    new settings({
    serverID: guild.id,
    serverName: guild.name,
    log: ""
}).save().catch(err => console.log(err.stack))
}
}) 
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription("Hello!")
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setThumbnail(bot.user.avatarURL)
        .setTitle(`My name is ${bot.user.username}, I will help watch over ${guild.name}!`)
        .setTimestamp()
        .addField("Prefix", `s!`, true)
        .addField("To use the logging feature, do **s!setchannel #channel-name** to get started!")
        .addField("Bot Creator", `Silenty#6969`, true)
    console.log(`I was added to (${guild.name}) Discord!, ServerID: ${guild.id}, Server Owner: ${guild.owner}, Server OwnerID: ${guild.ownerID}, MemberCount: ${guild.memberCount}, Server Region: ${guild.region}`);
       message.channel.send(botembed);
});

bot.on('guildCreate', async guild => {
    require('./status.js')(bot)
    const newserverembed = new Discord.RichEmbed()
        .setColor(`#FF000`)
        .setDescription(`Server Added`)
        .setThumbnail(guild.iconURL)
        .setTimestamp()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .addField(`Guild Name`, `${guild.name}`, true)
        .addField(`Guild ID`, `${guild.id}`, true)
        .addField(`Guild Owner`, `${guild.owner}`, true)
        .addField(`Guild Owner ID`, `${guild.ownerID}`, true)
        .addField(`Guild Member Count`, `${guild.memberCount}`, true)
        .addField(`Guild Server Region`, `${guild.region}`, true)
        .addField(`Guild Verification Level`, `${guild.verificationLevel}`, true)
    bot.channels.get('487326368686669844').send(newserverembed);
    bot.users.get('203259894743302145').send(newserverembed)

});

bot.on("guildDelete", async guild => {
    require('./status.js')(bot)
    const Deletedserverembed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setColor(`#FF000`)
        .setDescription(`Server Removed`)
        .setThumbnail(guild.iconURL)
        .setTimestamp()
        .addField(`Guild Name`, `${guild.name}`, true)
        .addField(`Guild ID`, `${guild.id}`, true)
        .addField(`Guild Owner`, `${guild.owner}`, true)
        .addField(`Guild Owner ID`, `${guild.ownerID}`, true)
        .addField(`Guild Member Count`, `${guild.memberCount}`, true)
        .addField(`Guild Server Region`, `${guild.region}`, true)
        .addField(`Guild Verification Level`, `${guild.verificationLevel}`, true)
    bot.channels.get('487326397937745920').send(Deletedserverembed)
    bot.users.get('203259894743302145').send(Deletedserverembed)

});

bot.on("channelCreate", async channel => {
    let guild = channel.guild;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setAuthor('Channel Created', channel.guild.iconURL)
        .setFooter(`ID: ${channel.id}`)
        .setTimestamp()
        .setDescription(`_ _►Name<#${channel.id}> \n ►Type **${channel.type}** \n ►ID **${channel.id}**`)
    bot.log(bot, message.guild, botembed);
});

bot.on("channelDelete", channel => {
    let guild = channel.guild;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor('Channel Deleted', channel.guild.iconURL)
        .setFooter(`ID: ${channel.id}`)
        .setTimestamp()
        .setDescription(`_ _►Name **${channel.name}**\n ►Type **${channel.type}**\n ►ID **${channel.id}**\n ►Position ${channel.position}`)
    bot.log(bot, message.guild, botembed);
});

bot.on('roleCreate', role => {
    let guild = role.guild;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setAuthor('Role Created', role.guild.iconURL)
        .setFooter(`${bot.user.tag}`, `${bot.user.avatarURL}`)
        .setTimestamp()
        .setDescription(`_ _►Name <@&${role.id}>\n ►ID **${role.id}** \n ►Hex Color **${role.hexColor}**`)
    bot.log(bot, message.guild, botembed);

});

bot.on("roleDelete", role => {
    let guild = role.guild;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setAuthor('Role Deleted', role.guild.iconURL)
        .setFooter(`${bot.user.tag}`, `${bot.user.avatarURL}`)
        .setTimestamp()
        .setDescription(`_ _►Name **${role.name}** \n ►ID **${role.id}** \n ►Position **${role.position}** \n ►Color **${role.hexColor}**`)
    bot.log(bot, message.guild, botembed);

});

bot.on("message", async message => {
    let coinsToAdd = Math.ceil(Math.random() * 10);
    Money.findOne({
        userID: message.author.id,
        serverID: message.guild.id
    }, (err, money) => {
        if(err) console.log(err);
        if(!money){
            const newMoney = new Money({
                userID: message.author.id,
                serverID: message.guild.id,
                money: coinsToAdd
            })

            newMoney.save().catch(err => console.log(err));
        }else {
            money.money = money.money + coinsToAdd;
            money.save().catch(err => console.log(err));

        }
    })
})

bot.registry
    .registerDefaultTypes()
    .registerGroups([
        ["botowner", "Owner Commands"],
        ["info", "Information Commands"],
        ["moderation", "Moderation Commands"],
        ["fun", "Fun Commands"]
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        ping: false,
        prefix: false,
    })
    .registerCommandsIn(path.join(__dirname, 'commands'));

// End of the bot.on Message.
//==============================================================================================================================================================================================

process.on('unhandledRejection', error => {
    console.error(`ERROR: \n${error}`);
});
