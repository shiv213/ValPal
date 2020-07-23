const request = require('request');

module.exports = {
    name: 'update-roles',
    description: 'Updates character roles using the Riot Games API.',
    aliases: ['updateroles'],
    cooldown: 120,
    guildOnly: true,
    execute(message, args) {
        request(`https://na.api.riotgames.com/val/content/v1/contents?locale=en-US&api_key=${process.env.val_apikey}`, {json: true}, (err, res, body) => {
            if (err) {
                return message.channel.send(err);
            }
            // console.log(body);
            for (const element of body.characters) {
                if (!(message.guild.roles.cache.some(role => role.name === element.name))) {
                    message.guild.roles.create({
                        data: {
                            name: element.name
                        }
                    }).then(r => message.channel.send(`Role **${element.name}** (${r}) has been added`)).catch(console.error);
                } else {
                    message.channel.send(`Role **${element.name}** already exists`);
                }
            }
        });
    },
};