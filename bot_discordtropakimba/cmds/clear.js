// file copied from DashCruft tutorials on Discord.js. His github repo here: https://github.com/DashCruft/Discord.JS-Coding-Tutorials/

const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message, args) => {
            
    if (message.deletable) {
        message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Si estás probando comandos al azar, para. No tienes permisos. ¿O quieres que le reste un punto en el patrullómetro a tu patrulla?").then(m => m.delete(5000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("Uso: /clear [número de mensajes a borrar]").then(m => m.delete(5000));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
    .catch(err => message.reply(`Something went wrong... ${err}`));

}

module.exports.config = {
    name: "clear",
    description: "clears message",
    usage: "/clear",
    accessableby: "Members",
    aliases: ['c', 'purge']
}