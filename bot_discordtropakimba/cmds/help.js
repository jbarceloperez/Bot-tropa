// CÓDIGO PARA EL COMANDO HELP
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message, args) => {
    message.channel.send("LISTA DE COMANDOS:\n    > /dado                                 Tira un dado de 6 caras.\n    > /moneda                            Tira una moneda para que salga cara o cruz.\n    > /patrullometro                 Da información sobre el patrullómetro\n    > /help                                   Muestra este menú\n    > /ping                                   pong!");
}

module.exports.config = {
    name: "help",
    description: "Shows a list of all possible commands.",
    usage: "/help",
    accessableby: "Members",
    aliases: ['h']
}