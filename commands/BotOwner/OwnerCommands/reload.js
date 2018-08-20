exports.run = (client, message, args) => {

    if (message.author.id !== "203259894743302145") return message.channel.send("⛔ **Owner Only Command**");

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {

        return message.channel.send(`Unable to reload: ${args[0]}.js`);
    }

    message.channel.send(`**Successfully reloaded:** ${args[0]}.js`);


}
