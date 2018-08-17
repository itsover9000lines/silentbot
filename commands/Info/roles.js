module.exports.run = async (bot, message, args) => {
    message.channel.send(`Server Roles ${message.guild.roles.map(role => role.name).join(' , ')}`);
}

module.exports.help = {
    name: "roles"
}
