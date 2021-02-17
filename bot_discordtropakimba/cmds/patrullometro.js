// CÓDIGO PARA EL COMANDO PATRULLOMETRO
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const patrullometro = require('../patrullometro.json'); // guarda la calve en un archivo externo


module.exports.run = async (client, message, args) => {
    //TODO la funcionalidad para que funcione el patrullómetro de vd
    message.channel.send("el primer patrullómetro de campamento lo ganó la patrulla de caimanes jeje");
    message.channel.send(" PUNTOS ACTUALES DEL PATRULLÓMETRO:");
    message.channel.send(" MAPACHES: " + patrullometro.mapaches + " puntos.");
    message.channel.send(" JAGUARES: " + patrullometro.jaguares + " puntos.");
    message.channel.send(" BÚFALOS: " + patrullometro.bufalos + " puntos.");
    message.channel.send(" ÁGUILAS: " + patrullometro.aguilas + " puntos.");
}

module.exports.config = {
    name: "patrullometro",
    description: "Devuelve el estado actual del patrullómetro.",
    usage: "/patrullometro",
    accessableby: "Members",
    aliases: []
}