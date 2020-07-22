const {val_apikey} = require('../config.json');
const request = require('request');
module.exports = {
    name: 'api-test',
    description: 'Checks to see if the connection to the Riot Games API is working.',
    aliases: ['api-check', 'apitest'],
    cooldown: 30,
    execute(message, args) {
        request(`https://na.api.riotgames.com/val/content/v1/contents?locale=en-US&api_key=${val_apikey}`, { json: true }, (err, res, body) => {
            if (err) { return message.channel.send(err); }
            // console.log(body);
            message.channel.send('```json\n' + JSON.stringify(body.characters) + '\n```')

        });
        // https.get(`https://na.api.riotgames.com/val/content/v1/contents?locale=en-US&api_key=${val_apikey}`, (resp) => {
        //     let data = '';
        //     resp.on('data', (chunk) => {
        //         data += chunk;
        //     });
        //     resp.on('end', () => {
        //         message.channel.send('```json\n' + JSON.stringify(JSON.parse(data).version) + '\n```')
        //     });
        //
        // }).on("error", (err) => {
        //     message.channel.send("Error: " + err.message);
        // });
    },
};