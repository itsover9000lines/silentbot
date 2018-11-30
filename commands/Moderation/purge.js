const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "purge",
            memberName: "purge",
            aliases: ["prune"],
            examples: [`${client.commandPrefix}purge <amount here>`],
            description: "Purges an amount of messages in the channel.",
            group: "moderation",
            guildOnly: true,
            userPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
            args: [
                {
                    key: 'amount',
                    prompt: 'Please choose a number between **1 and 100**.',
                    min: 1,
                    max: 100,
                    type: 'integer'
                }
            ],
        })
    }
    async run(msg, { amount }) {
        amount = amount === 100 ? 99 : amount;
        msg.channel.bulkDelete(amount + 1, true);

        const reply = await msg.say(`\`Deleted ${amount + 1} messages\``);

        return reply.delete({
            timeout: 10000,
            reason: 'Deleting own return message after purge'
        });
    }
}
