module.exports = {
    name: 'ping',
    cooldown: 5,
    description: 'Pong!!',
    execute(message, args) {
        message.channel.send("Pong?");
    },
};