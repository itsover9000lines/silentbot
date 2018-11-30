const {Command} = require('discord.js-commando'),
 Discord = require('discord.js');
module.exports = class RestartCommand extends Command {
    constructor(client) {
        super(client, {
            name: "restart",
            memberName: "restart",
            aliases: ["rt"],
            description: "Restarts the bot.",
            group: "botowner",
            ownerOnly: true
        })
    }
    async run(message) {
        let bot = this.client
        await message.say(`Restarting.`).then(bot.destroy().then(bot.login(process.env.BOT_TOKEN)))
    }
}
