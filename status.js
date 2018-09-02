module.exports = (bot) => {
	bot.user.setActivity(`s!help`, { type: "STREAMING", url: "https://www.twitch.tv/silentgamerplayz" });
	let userssize = bot.users.size;
	let channelsize = bot.channels.size;
	let guildsize = bot.guilds.size;
	var status = [
		`s!help | Users: ${userssize}`,
		`s!help | Servers: ${guildsize}`,
    		`s!help | Channels: ${channelsize}`
	];
	setInterval(() => {
		let gameval = Math.floor((Math.random() * status.length));
		bot.user.setActivity(`${status[gameval]}`, { type: "STREAMING", url: "https://www.twitch.tv/silentgamerplayz" });
	}, 10000);
};
