const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "203259894743302145") return bot.users.get("203259894743302145").send(`${message.author.username} Has Tried to use the Leave Server Command.`).catch(() => console.error('I couldnt send the PM to the user.'));
    //bot.guilds.find('id', `${args[0]}`).owner.send(`This bot has been removed from your server. To know full details of this, please contact the bot owner SilentMemer#7124 or join the support server. https://discord.gg/4m7fmYA`)
    await bot.guilds.find('id', `${args[0]}`).leave()
}
module.exports.help = {
    name: "leaveserver",
    names: "LeaveServer"
}
