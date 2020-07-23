const request = require('request');

module.exports = {
    name: 'api-test',
    description: 'Checks to see if the connection to the Riot Games API is working.',
    aliases: ['api-check', 'apicheck', 'apitest'],
    cooldown: 30,
    execute(message, args) {
        request(`https://na.api.riotgames.com/val/content/v1/contents?locale=en-US&api_key=${process.env.val_apikey}`, { json: true }, (err, res, body) => {
            if (err) { return message.channel.send(err); }
            // console.log(body);
            message.channel.send('```json\n' + JSON.stringify(body.characters) + '\n```');
        });
    },
};