const fs = require('fs');

module.exports = {
    name: 'agents',
    description: 'Lists all Valorant agents',
    cooldown: 5,
    guildOnly: true,
    args: true,
    async execute(message, args, {Canvas: Canvas, Discord: Discord}) {
        var linkjson = JSON.parse(fs.readFileSync('properties.json'))
        message.channel.startTyping()
        const canvasstats = Canvas.createCanvas(4100, 2160) //set image size
        const ctx = canvasstats.getContext('2d') //text preparation

        //function for easier text
        //Base: ctx.text('Text', Size, X, Y, '#Color', 'textAlign')
        ctx.text = function (content = 'Leer', size = 100, x = 0, y = 0, color = '#ffffff', textAlign = 'left') {
            ctx.font = size + 'px product_sans';
            ctx.fillStyle = color
            ctx.textAlign = textAlign
            ctx.fillText(content, x, y)
        }

        //function for easier text
        //Base: ctx.text('Text', Size, X, Y, '#Color', 'textAlign')
        ctx.text2 = function (content = 'Leer', size = 100, x = 0, y = 0, color = '#ffffff', textAlign = 'left', rotate = -0.5 * Math.PI) {
            ctx.font = size + 'px valorant_font';
            ctx.fillStyle = color
            ctx.textAlign = textAlign
            ctx.save();
            ctx.translate(200, canvasstats.height / 2);
            ctx.rotate(rotate);
            ctx.fillText(content, 0, 0);
            ctx.restore();
        }
        //function for easier text
        //Base: ctx.text('Text', Size, X, Y, '#Color', 'textAlign')
        ctx.text3 = function (content = 'Leer', size = 100, x = 0, y = 0, color = '#ffffff', textAlign = 'left') {
            ctx.font = size + 'px valorant_font';
            ctx.fillStyle = color
            ctx.textAlign = textAlign
            ctx.fillText(content, x, y);
        }

        const Agents = {
            breach: {
                name: 'Breach',
                url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt100d13bfa8286a3d/5eb7cdc11ea0c32e33b95fa2/V_AGENTS_587x900_Breach.png',
                ccost: linkjson["en"].breachccost,
                cability: linkjson["en"].breachcability,
                cabilitydescription: linkjson["en"].breachcabilitydescription,
                qcost: linkjson["en"].breachqcost,
                qability: linkjson["en"].breachqability,
                qabilitydescription: linkjson["en"].breachqabilitydescription,
                ecost: linkjson["en"].breachecost,
                eability: linkjson["en"].breacheability,
                eabilitydescription: linkjson["en"].breacheabilitydescription,
                xcost: linkjson["en"].breachxcost,
                xability: linkjson["en"].breachxability,
                xabilitydescription: linkjson["en"].breachxabilitydescription,
            },
            brimstone: {
                name: 'Brimstone',
                url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt26fcf1b5752514ee/5eb7cdbfc1dc88298d5d3799/V_AGENTS_587x900_Brimstone.png',
                ccost: linkjson["en"].brimstoneccost,
                cability: linkjson["en"].brimstonecability,
                cabilitydescription: linkjson["en"].brimstonecabilitydescription,
                qcost: linkjson["en"].brimstoneqcost,
                qability: linkjson["en"].brimstoneqability,
                qabilitydescription: linkjson["en"].brimstoneqabilitydescription,
                ecost: linkjson["en"].brimstoneecost,
                eability: linkjson["en"].brimstoneeability,
                eabilitydescription: linkjson["en"].brimstoneeabilitydescription,
                xcost: linkjson["en"].brimstonexcost,
                xability: linkjson["en"].brimstonexability,
                xabilitydescription: linkjson["en"].brimstonexabilitydescription,
            },
            cypher: {
                name: 'Cypher',
                url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt158572ec37653cf3/5eb7cdc19df5cf37047009d1/V_AGENTS_587x900_Cypher.png',
                ccost: linkjson["en"].cypherccost,
                cability: linkjson["en"].cyphercability,
                cabilitydescription: linkjson["en"].cyphercabilitydescription,
                qcost: linkjson["en"].cypherqcost,
                qability: linkjson["en"].cypherqability,
                qabilitydescription: linkjson["en"].cypherqabilitydescription,
                ecost: linkjson["en"].cypherecost,
                eability: linkjson["en"].cyphereability,
                eabilitydescription: linkjson["en"].cyphereabilitydescription,
                xcost: linkjson["en"].cypherxcost,
                xability: linkjson["en"].cypherxability,
                xabilitydescription: linkjson["en"].cypherxabilitydescription,
            },
            jett: {
                name: 'Jett',
                url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png',
                ccost: linkjson["en"].jettccost,
                cability: linkjson["en"].jettcability,
                cabilitydescription: linkjson["en"].jettcabilitydescription,
                qcost: linkjson["en"].jettqcost,
                qability: linkjson["en"].jettqability,
                qabilitydescription: linkjson["en"].jettqabilitydescription,
                ecost: linkjson["en"].jettecost,
                eability: linkjson["en"].jetteability,
                eabilitydescription: linkjson["en"].jetteabilitydescription,
                xcost: linkjson["en"].jettxcost,
                xability: linkjson["en"].jettxability,
                xabilitydescription: linkjson["en"].jettxabilitydescription,
            },
            omen: {
                name: 'Omen',
                url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4e5af408cc7a87b5/5eb7cdc17bedc8627eff8deb/V_AGENTS_587x900_Omen.png',
                ccost: linkjson["en"].omenccost,
                cability: linkjson["en"].omencability,
                cabilitydescription: linkjson["en"].omencabilitydescription,
                qcost: linkjson["en"].omenqcost,
                qability: linkjson["en"].omenqability,
                qabilitydescription: linkjson["en"].omenqabilitydescription,
                ecost: linkjson["en"].omenecost,
                eability: linkjson["en"].omeneability,
                eabilitydescription: linkjson["en"].omeneabilitydescription,
                xcost: linkjson["en"].omenxcost,
                xability: linkjson["en"].omenxability,
                xabilitydescription: linkjson["en"].omenxabilitydescription,
            },
            pheonix: {
                name: 'Pheonix',
                url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0200e1821b5b39f/5eb7cdc144bf8261a04d87f9/V_AGENTS_587x900_Phx.png',
                ccost: linkjson["en"].pheonixccost,
                cability: linkjson["en"].pheonixcability,
                qcost: linkjson["en"].pheonixqcost,
                qability: linkjson["en"].pheonixqability,
                ecost: linkjson["en"].pheonixecost,
                eability: linkjson["en"].pheonixeability,
                xcost: linkjson["en"].pheonixxcost,
                xability: linkjson["en"].pheonixxability,
                xabilitydescription: linkjson["en"].pheonixxabilitydescription,
            },
            raze: {
                name: 'Raze',
                url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6fef56a8182d0a81/5ebf2c2798f79d6925dbd6b4/V_AGENTS_587x900_ALL_Raze_2.png',
                ccost: linkjson["en"].razeccost,
                cability: linkjson["en"].razecability,
                qcost: linkjson["en"].razeqcost,
                qability: linkjson["en"].razeqability,
                ecost: linkjson["en"].razeecost,
                eability: linkjson["en"].razeeability,
                xcost: linkjson["en"].razexcost,
                xability: linkjson["en"].razexability,
                xabilitydescription: linkjson["en"].razexabilitydescription,
            },
            sage: {
                name: 'Sage',
                url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png',
                ccost: linkjson["en"].sageccost,
                cability: linkjson["en"].sagecability,
                qcost: linkjson["en"].sageqcost,
                qability: linkjson["en"].sageqability,
                ecost: linkjson["en"].sageecost,
                eability: linkjson["en"].sageeability,
                xcost: linkjson["en"].sagexcost,
                xability: linkjson["en"].sagexability,
                xabilitydescription: linkjson["en"].sagexabilitydescription,
            },
            sova: {
                name: 'Sova',
                url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf11234f4775729b7/5ebf2c275e73766852c8d5d4/V_AGENTS_587x900_ALL_Sova_2.png',
                ccost: linkjson["en"].sovaccost,
                cability: linkjson["en"].sovacability,
                qcost: linkjson["en"].sovaqcost,
                qability: linkjson["en"].sovaqability,
                ecost: linkjson["en"].sovaecost,
                eability: linkjson["en"].sovaeability,
                xcost: linkjson["en"].sovaxcost,
                xability: linkjson["en"].sovaxability,
                xabilitydescription: linkjson["en"].sovaxabilitydescription,
            },
            viper: {
                name: 'Viper',
                url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc825c6589eda7717/5eb7cdc6ee88132a6f6cfc25/V_AGENTS_587x900_Viper.png',
                ccost: linkjson["en"].viperccost,
                cability: linkjson["en"].vipercability,
                qcost: linkjson["en"].viperqcost,
                qability: linkjson["en"].viperqability,
                ecost: linkjson["en"].viperecost,
                eability: linkjson["en"].vipereability,
                xcost: linkjson["en"].viperxcost,
                xability: linkjson["en"].viperxability,
                xabilitydescription: linkjson["en"].viperxabilitydescription,
            },
            reyna: {
                name: 'reyna',
                url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png',
                ccost: linkjson["en"].reynaccost,
                cability: linkjson["en"].reynacability,
                qcost: linkjson["en"].reynaqcost,
                qability: linkjson["en"].reynaqability,
                ecost: linkjson["en"].reynaecost,
                eability: linkjson["en"].reynaeability,
                xcost: linkjson["en"].reynaxcost,
                xability: linkjson["en"].reynaxability,
                xabilitydescription: linkjson["en"].reynaxabilitydescription,
            },

        }


        const {prefix} = require('../config.json');
        // Cut start to get the name
        const name = args[0];
        // lookup data for weapon
        const agent = Agents[name]
        if (agent) {
            if (name === 'breach') {
                const background = await Canvas.loadImage("./commands/images/agent/Breach/Breach-Englisch.png"); //load background from url
                ctx.drawImage(background, 0, 0, canvasstats.width, canvasstats.height); // displays background
            } else if (name === 'brimstone') {
                const background = await Canvas.loadImage("./commands/images/agent/Brimstone/Brimstone-Englisch.png"); //load background from url
                ctx.drawImage(background, 0, 0, canvasstats.width, canvasstats.height); // displays background
            } else if (name === 'cypher') {
                const background = await Canvas.loadImage("./commands/images/agent/Cypher/Cypher-Englisch.png"); //load background from url
                ctx.drawImage(background, 0, 0, canvasstats.width, canvasstats.height); // displays background
            } else if (name === 'jett') {
                const background = await Canvas.loadImage("commands/images/agent/Jett/Jett-Englisch.png"); //load background from url
                ctx.drawImage(background, 0, 0, canvasstats.width, canvasstats.height); // displays background
            } else if (name === 'omen') {
                const background = await Canvas.loadImage("commands/images/agent/Omen/Omen-Englisch.png"); //load background from url
                ctx.drawImage(background, 0, 0, canvasstats.width, canvasstats.height); // displays background
            } else if (name === 'phoenix') {
                const background = await Canvas.loadImage("commands/images/agent/Pheonix/Pheonix-Englisch.png"); //load background from url
                ctx.drawImage(background, 0, 0, canvasstats.width, canvasstats.height); // displays background
            } else if (name === 'raze') {
                const background = await Canvas.loadImage("commands/images/agent/Raze/Raze-Englisch.png"); //load background from url
                ctx.drawImage(background, 0, 0, canvasstats.width, canvasstats.height); // displays background
            } else if (name === 'reyna') {
                const background = await Canvas.loadImage("commands/images/agent/Reyna/Reyna-Englisch.png"); //load background from url
                ctx.drawImage(background, 0, 0, canvasstats.width, canvasstats.height); // displays background
            } else if (name === 'sage') {
                const background = await Canvas.loadImage("commands/images/agent/Sage/Sage-Englisch.png"); //load background from url
                ctx.drawImage(background, 0, 0, canvasstats.width, canvasstats.height); // displays background
            } else if (name === 'sova') {
                const background = await Canvas.loadImage("commands/images/agent/Sova/Sova-Englisch.png"); //load background from url
                ctx.drawImage(background, 0, 0, canvasstats.width, canvasstats.height); // displays background
            } else if (name === 'viper') {
                const background = await Canvas.loadImage("commands/images/agent/Viper/Viper-Englisch.png"); //load background from url
                ctx.drawImage(background, 0, 0, canvasstats.width, canvasstats.height); // displays background
            }
            //Avatar
            // Pick up the pen
            ctx.beginPath();
            // Start the arc to form a circle
            ctx.arc(130, 2025, 80, 0, Math.PI * 2, true);
            // Put the pen down
            ctx.closePath();
            // Clip off the region you drew on
            ctx.clip();

            const avatarl = await Canvas.loadImage(message.author.displayAvatarURL({format: 'jpg'}));
            ctx.drawImage(avatarl, 30, 1925, 200, 200)

            const attachment = new Discord.MessageAttachment(canvasstats.toBuffer(), "valorant-agents.png"); //final result
            message.channel.send(attachment); //send final result
            message.channel.stopTyping()
        } else {
            const Embed = new Discord.MessageEmbed()
                .setColor('#ee3054')
                .setTitle(linkjson["en"].agentunknown)
                .setTimestamp()
                .setFooter('ValPal Error');
            message.channel.send(Embed);
            message.channel.stopTyping()
        }
    },
};