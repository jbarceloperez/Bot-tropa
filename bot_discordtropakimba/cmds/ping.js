// CÓDIGO PARA EL COMANDO PING
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message, args) => {
    message.reply("pong!");
}

module.exports.config = {
    name: "ping",
    description: "Answers pong!.",
    usage: "/ping",
    accessableby: "Members",
    aliases: []
}