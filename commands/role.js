module.exports = {
    name: 'role',
    description: 'Assigns roles to user',
    args: true,
    cooldown: 3,
    execute(message, args) {
        let role = message.guild.roles.cache.find(role => role.name === args[0]);
        if (role) {
            message.member.roles.add(role);
            message.reply(`The **${role.name}** role has been given to you.`)
        }

    },
};

// // Krish's c0de
// module.exports = {
//     name: 'give-role',
//     description: 'gives roles',
//     execute(message, args) {
//         var role = message.author.guild.roles.find ("name", args);
//         if (args[0] === role)
//             message.author.addRole(role)
//
//     },
// };