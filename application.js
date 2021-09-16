/*
  ____  _                 _        ____  _             
 / ___|(_)_ __ ___  _ __ | | ___  |  _ \(_)_ __   __ _ 
 \___ \| | '_ ` _ \| '_ \| |/ _ \ | |_) | | '_ \ / _` |
  ___) | | | | | | | |_) | |  __/ |  __/| | | | | (_| |
 |____/|_|_| |_| |_| .__/|_|\___| |_|   |_|_| |_|\__, |
                   |_|                           |___/ 


    A simple ping-prevention discord bot
*/

const Discord = require('discord.js');
const H4r1ey = new Discord.Client();
H4r1ey.config = require('./config/botConfig');
const fs = require('fs');

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        H4r1ey.once(event.name, (...args) => event.execute(...args, H4r1ey, Discord));
    } else {
        H4r1ey.on(event.name, (...args) => event.execute(...args, H4r1ey, Discord));
    }
}

H4r1ey.login(H4r1ey.config.mainConfig.botToken)