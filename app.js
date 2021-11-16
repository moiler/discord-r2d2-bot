const { Client } = require('discord.js');
const { botIntents, prefix, commands } = require('./config/config');
const config = require('./config/default');

const client = new Client({
  intents: botIntents,
  partials: ['CHANNEL', 'MESSAGE'],
});

client.on('ready', () => {
  console.log('Logged in as ' + client.user.tag);
});

const startBot = () => {
  console.log('Starting bot');
  try {
    client.login(config.DISCORD_TOKEN);
  } catch (error) {
    console.error("Error starting bot", { error })
  }
};

client.on('messageCreate', (msg) => {
  if (msg.author.bot || !msg.content.startsWith(prefix))
    return; // do nothing if command is not preceded with prefix

  const cmd = msg.content.slice(prefix.length);

  if (cmd === commands.beep) {
    msg.reply('beep boop beep');
  } else if (cmd === commands.boop) {
    msg.reply('boop beep boop');
  } else {

    return;
  }
});

module.exports = startBot;