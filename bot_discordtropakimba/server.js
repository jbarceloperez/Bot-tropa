// https://discordapi.com/permissions.html#0   <-  invitación a los bots para entrar a tus servers

// Import the discord.js module
const Discord = require("discord.js");
const botsettings = require('./botsettings.json'); // guarda la calve en un archivo externo
const fs = require("fs");

// Create an instance of a Discord client
const client = new Discord.Client();


// Estos eventos no se pudieron meter en el eventHandler idk why :(
// welcome message
client.on('guildMemberAdd', member => {
    const welcomeChannel = member.guild.channels.cache.find(i => i.name === 'bienvenida')
    const welcomeEmbed = new Discord.MessageEmbed()
    welcomeEmbed.setColor('#5cf000')
    welcomeEmbed.setTitle('¡**' + member.user.username + '** ha llegado a la Tropa Kimba!')
    welcomeEmbed.setDescription(`Bienvenido ${member}, escribe el comando "/patrulla" + el nombre de tu patrulla **EN MINÚSCULAS y SIN TILDES** para que se te asigne tu patrulla.\nPor ejemplo, si yo fuese de la patrulla caimanes, pondría: **/patrulla caimanes**`)
    welcomeEmbed.setImage('https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/50338196_2201233966810945_1912770076184936448_n.jpg?_nc_cat=108&ccb=3&_nc_sid=09cbfe&_nc_ohc=QPrDnTEl3QAAX-g7N3O&_nc_ht=scontent-mad1-1.xx&oh=37fe67e4fafe2efd457344ad45e744d0&oe=604CD42A')
    welcomeChannel.send(welcomeEmbed)
})
//bye bye message
client.on("guildMemberRemove", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'adios')
    welcomeChannel.send (`Nos veremos en próximas lunas! ${member}`)
})


require("./util/eventHandler")(client)

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


// command handler which reads commands from the /cmds/ folder 
fs.readdir("./cmds/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./cmds/${f}`);
        client.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            client.aliases.set(alias, pull.config.name)
        });
    });
});

// Create an event listener for messages
client.on("message", async message => {
    //if (message.author.client || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if (commandfile) commandfile.run(client,message,args);
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login(botsettings.token); //token almacenado en un archivo aparte jeje






 