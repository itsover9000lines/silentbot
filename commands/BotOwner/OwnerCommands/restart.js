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
        await message.say(`Restarting.`).then(this.client.destroy().then(this.client.login(process.env.BOT_TOKEN)))
    }
}
