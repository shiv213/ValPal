module.exports = {
    name: "whoami",
    description: "Returns user info",
    execute(message, args) {
        message.channel.send(`your username is ${message.author.username}`);
    },
};