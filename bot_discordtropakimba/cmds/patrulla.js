// CÓDIGO PARA EL COMANDO PATRULLA
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message, args) => {
    if (message.member.roles.cache.has('809427979808538654'))   // si ya tienen rol no pueden reasignarse otro
        return message.channel.send("Tú ya tienes patrulla, ¡no te metas en otra! Si estás en la patrulla equivocada, mándale un mensaje al equipo.");
    if (args.length != 1)
        return message.channel.send("ERROR al escribir el comando. Te recuerdo que debes escribir /patrulla + el nombre de tu patrulla EN MINÚSCULAS y SIN TILDES.");
    else {
        switch (args[0]) {
            case "equipo":
                message.channel.send("equipitooo oooleeeeeeeee, os habla el javi del pasado mientras programa, vosotros tenéis permisos de administrador en el server así que manejáis el cotarro tb.");
                message.member.roles.add(['809426716535554058','809427979808538654']);
                break;
            case "aguilas":
                 message.channel.send("¡Rapaces y veloces!");
                 message.member.roles.add(['809427303427604590','809427979808538654'])    // rol de la patrulla, rol de la tropa
                 break;
            case "jaguares":
                message.channel.send("¡Rápidos y eficaces!");
                message.member.roles.add(['809427097059328090', '809427979808538654'])    // rol de la patrulla, rol de la tropa
                break;
            case "bufalos":
                message.channel.send("¡Cornudos y cojonudos!");
                message.member.roles.add(['809427270208978945', '809427979808538654'])    // rol de la patrulla, rol de la tropa
                break;
            case "mapaches":
                message.channel.send("¡Trepadores y vencedores!");
                message.member.roles.add(['809427215455748116', '809427979808538654'])    // rol de la patrulla, rol de la tropà
                break;
            case "caimanes":
                message.channel.send("¡Fieles y leales! Aunque ya de caimanes ya queda poco... Pon tu patrulla de verdad!!!");
                break;
            case "ornitorrincos":
                message.channel.send("¡Siempre dando brincos! Aunque ya de ornitorrincos ya queda poco... Pon tu patrulla de verdad!!!");
                break;  
            default:
                message.channel.send("Esa patrulla no existe!. Te recuerdo que debes escribir /patrulla + el nombre de tu patrulla EN MINÚSCULAS y SIN TILDES.")
                break;
        }
    }
}

module.exports.config = {
    name: "patrulla",
    description: "Asigna al usuario el rol correspondiente a la patrulla pasada como argumento.",
    usage: "/patrulla",
    accessableby: "Members",
    aliases: ["/p"]
}