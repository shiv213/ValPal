const {prefix} = require('../config.json');

module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command.',
    aliases: ['commands', 'info'],
    usage: '[command name]',
    cooldown: 3,
    execute(message, args) {
        const embedContent = {
            "title": "~Help~",
            "url": "https://github.com/shiv213/ValPal",
            "color": 12995298,
            "footer": {
                "icon_url": "https://i.imgur.com/VN3lXRw.jpeg",
                "text": "Currently serving " + `${message.client.guilds.cache.size}` + " servers"
            },
            "thumbnail": {
                "url": "https://i.imgur.com/VN3lXRw.jpeg"
            },
            "author": {
                "name": "ValPal",
                "url": "https://discord.com/api/oauth2/authorize?client_id=735363879235747920&permissions=0&scope=bot",
                "icon_url": "https://i.imgur.com/VN3lXRw.jpeg"
            },
            "fields": [{
                "name": ":revolving_hearts: Made with love by @shiv213#7699",
                "value": "ValPal#5210 © 2020"
            }
            ]
        };
        const data = [];
        const {commands} = message.client;

        if (!args.length) {
            message.author.send({embed: embedContent});
            data.push('Here\'s a list of all my commands:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

            return message.author.send(data, {split: true})
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you!');
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        data.push(`**Cooldown:** ${command.cooldown || "No"} second(s)`);

        message.channel.send(data, {split: true});
    },
};