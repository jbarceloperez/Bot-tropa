// CÓDIGO PARA EL COMANDO PUNTO
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const patrullometro = require('../patrullometro.json'); // guarda la calve en un archivo externo


module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.reply(" > ERROR - NO PERMISSIONS");
    switch (args[0]) {
        case "mapaches":
            patrullometro.mapaches =+ 1;
            message.channel.send(" > Ahora mapaches tiene  " + patrullometro.mapaches + " puntos.");
            break;
        case "jaguares":
            patrullometro.jaguares =+ 1;
            message.channel.send(" > Ahora jaguares tiene  " + patrullometro.jaguares + " puntos.");
            break;
        case "bufalos":
            patrullometro.mapaches =+ 1;
            message.channel.send(" > Ahora búfalos tiene  " + patrullometro.bufalos + " puntos.");
            break;
        case "aguilas":
            patrullometro.aguilas = 1;
            message.channel.send(" > Ahora águilas tiene  " + patrullometro.mapaches + " puntos.");
            break;
        default:
            return message.reply(" > ERROR - Uso: /punto [patrulla]");
    }
}

module.exports.config = {
    name: "punto",
    description: "Suma un punto a la patrulla asignada.",
    usage: "/punto",
    accessableby: "Members",
    aliases: ["add"]
}