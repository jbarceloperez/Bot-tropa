// CÓDIGO PARA EL COMANDO PATRULLOMETRO
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message, args) => {
    //TODO la funcionalidad para que funcione el patrullómetro de vd
    message.channel.send("el primer patrullómetro de campamento lo ganó la patrulla de caimanes jeje");
}

module.exports.config = {
    name: "patrullometro",
    description: "Devuelve el estado actual del patrullómetro.",
    usage: "/patrullometro",
    accessableby: "Members",
    aliases: []
}