const Discord = require('discord.js');
const Client = require('fortnite');
const fortnite = new Client(process.env.FORTNITEAPI)
module.exports.run = async (bot, message, args) => {
        let username = args[0]
        let gamemode = args[1]
        let platform = args[2]
        if(!username) return message.channel.send(`Please provide a username. [s!fortnite <Username> <Game Mode> <Platform>]`);
        if(!gamemode) return message.channel.send(`Please provide a game mode [solo, duo, squad, lifetime]. [s!fortnite <Username> <Game Mode> <Platform>]`);
        if(!platform) return message.channel.send(`Please provide a platform [pc, xbl, psn]. [s!fortnite <Username> <Game Mode> <Platform>]`)
        //!fortnite Ninja solo [pc, xbl, psn]
        if (gamemode === 'solo' || gamemode === 'duo' || gamemode === 'squad' || gamemode === 'lifetime'){

        let data = fortnitestats.user(username, platform).then(data => {

            let stats = data.stats;

            if (gamemode === 'solo') {
                let solostats = stats.solo;
                let score = solostats.score;
                let kd = solostats.kd;
                let mplayed = solostats.matches;
                let kills = solostats.kills;
                let wins = solostats.wins;
                let top3 = solostats.top_3;
                let top6 = solostats.top_6;
                let top12 = solostats.top_12;
                let top25 = solostats.top_25;

                let embed = new Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setAuthor(data.username)
                    .setDescription(`**Solo Stats** For [${data.username}](${data.URL})`)
                    .addField(`Wins`, wins, true)
                    .addField(`Kills`, kills, true)
                    .addField(`Score`, score, true)
                    .addField(`Matches Played`, mplayed, true)
                    .addField(`Kill/Death Ratio`, kd, true)
                    .addField(`Top 3`, top3, true)
                    .addField(`Top 6`, top6, true)
                    .addField(`Top 12`, top12, true)
                    .addField(`Top 25`, top25, false)
                    .setThumbnail(`https://pbs.twimg.com/profile_images/1017458813199372289/QtGv1tyn_400x400.jpg`)
                message.channel.send(embed)

            } else if (gamemode === 'duo') {
                let duostats = stats.duo
                let score = duostats.score;
                let kd = duostats.kd;
                let mplayed = duostats.matches;
                let kills = duostats.kills;
                let wins = duostats.wins;
                let top3 = duostats.top_3;
                let top6 = duostats.top_6;
                let top12 = duostats.top_12;
                let top25 = duostats.top_25;

                let embed = new Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setAuthor(data.username)
                    .setDescription(`**Duo Stats** For [${data.username}](${data.URL})`)
                    .addField(`Wins`, wins, true)
                    .addField(`Kills`, kills, true)
                    .addField(`Score`, score, true)
                    .addField(`Matches Played`, mplayed, true)
                    .addField(`Kill/Death Ratio`, kd, true)
                    .addField(`Top 3`, top3, true)
                    .addField(`Top 6`, top6, true)
                    .addField(`Top 12`, top12, true)
                    .addField(`Top 25`, top25, false)
                    .setThumbnail(`https://pbs.twimg.com/profile_images/1017458813199372289/QtGv1tyn_400x400.jpg`)

                message.channel.send(embed)

            } else if (gamemode === 'squad') {
                let squadstats = stats.squad
                let score = squadstats.score;
                let kd = squadstats.kd;
                let mplayed = squadstats.matches;
                let kills = squadstats.kills;
                let wins = squadstats.wins;
                let top3 = squadstats.top_3;
                let top6 = squadstats.top_6;
                let top12 = squadstats.top_12;
                let top25 = squadstats.top_25;

                let embed = new Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setAuthor(data.username)
                    .setDescription(`**Squad Stats** For [${data.username}](${data.URL})`)
                    .addField(`Wins`, wins, true)
                    .addField(`Kills`, kills, true)
                    .addField(`Score`, score, true)
                    .addField(`Matches Played`, mplayed, true)
                    .addField(`Kill/Death Ratio`, kd, true)
                    .addField(`Top 3`, top3, true)
                    .addField(`Top 6`, top6, true)
                    .addField(`Top 12`, top12, true)
                    .addField(`Top 25`, top25, false)
                    .setThumbnail(`https://pbs.twimg.com/profile_images/1017458813199372289/QtGv1tyn_400x400.jpg`)

                message.channel.send(embed)

            } else {
          let stats = data.stats;
            let lifetime = stats.lifetime;
            let score = lifetime[6]['Score'];
            let mplayed = lifetime[7]['Matches Played'];
            let wins = lifetime[8]['Wins'];
            let winper = lifetime[9]['Win%'];
            let kills = lifetime[10]['Kills'];
            let kd = lifetime[11]['K/d'];
            let top3 = lifetime[1][`Top 3s`];
            let top6 = lifetime[2][`Top 6s`];
            let top10 = lifetime[3][`Top 10`];
            let top12 = lifetime[4][`Top 12s`]
            let top25 = lifetime[5][`Top 25s`];
            let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setAuthor(data.username)
                .setDescription(`**LifeTime Stats** For [${data.username}](${data.URL})`)
                .addField(`Wins`, wins, true)
                .addField(`Kills`, kills, true)
                .addField(`Score`, score, true)
                .addField(`Matches Played`, mplayed, true)
                .addField(`Win Percentage`, winper, true)
                .addField(`Kill/Death Ratio`, kd, true)
                .addField(`Top 3`, top3, true)
                .addField(`Top 6`, top6, true)
                .addField(`Top 10`, top10, true)
                .addField(`Top 12`, top12, true)
                .addField(`Top 25`, top25, false)
                .setThumbnail(`https://pbs.twimg.com/profile_images/1017458813199372289/QtGv1tyn_400x400.jpg`)
                message.channel.send(embed)

            }

        }).catch(error => {
            message.say(`**${error}**`)
        })
