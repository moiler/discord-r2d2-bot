const { Intents } = require('discord.js');

const {
    DIRECT_MESSAGES,
    GUILD_MESSAGES,
    GUILDS,
} = Intents.FLAGS;

const botIntents = [
    DIRECT_MESSAGES,
    GUILD_MESSAGES,
    GUILDS,
];

const commands = {
    getName: 'get-name',
    beep: 'beep',
    boop: 'boop'
};

const prefix = '!';

module.exports = { 
    prefix, 
    commands,
    botIntents
};