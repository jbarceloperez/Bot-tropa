// CÓDIGO PARA EL COMANDO DADO
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message, args) => {
    message.reply("¡Ha salido un " + (Math.floor(Math.random() * (6) ) + 1) + "!")
}

module.exports.config = {
    name: "dado",
    description: "Tira un dado del número de 6 caras.",
    usage: "/dado",
    accessableby: "Members",
    aliases: ['d']
}