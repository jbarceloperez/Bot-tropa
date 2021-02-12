// CÓDIGO PARA EL COMANDO DADO
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message, args) => {
    let res = Math.floor(Math.random() * (2) ) + 1;
    if (res == 1) return message.reply("¡Ha salido cara!");
    if (res == 2) return message.reply("¡Ha salido cruz!");
}

module.exports.config = {
    name: "moneda",
    description: "Tira una moneda, sale cara o cruz.",
    usage: "/moneda",
    accessableby: "Members",
    aliases: ['coinflip']
}