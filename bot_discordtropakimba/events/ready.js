/**
 * The ready event is vital, it means that only AFTER this will your bot start reacting to information
 * received from Discord
 */
const Discord = require("discord.js")

module.exports = client => { 
    console.log(`${client.user.username} is online`)
    console.log("BOT \"EL CHAMÁN DE LA TROPA\" FUNCIONANDO");
    client.user.setActivity(" la canción del Pow-Ow...", {type:"LISTENING"});
}