//MAIN CODE FOR THE BOT EVENT HANDLER
const reqEvent = (event) => require(`../events/${event}`)   // carpeta donde se guarda el código de los eventos

module.exports = client => {
    client.on("ready", function() {reqEvent("ready") (client) });
 }