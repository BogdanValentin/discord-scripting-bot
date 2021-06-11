const Discord = require('discord.js');

const config = require('../config.json');
const bot = new Discord.Client();

const messageHandle = require('./eventHandle/message');

bot.on('ready', () => {
    console.log(`Bot logged as ${bot.user.tag}`);
});

bot.on('message', messageHandle);

bot.login(config.token);
