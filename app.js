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

client.on('interactionCreate', (interaction) => {
  console.log('interactionCreate', {interaction});
});


client.on('messageCreate', (message) => {
  console.log('messageCreate', { msg: message });
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return; // do nothing if command is not preceded with prefix

  const userCmd = message.content.slice(prefix.length);

  if (userCmd === commands.getName) {
    message.reply(message.author.username);
  } else if (userCmd === commands.beep) {
    message.reply('beep boop beep');
  } else if (userCmd === commands.boop) {
    message.reply('boop beep boop');
  } else {
    message.reply('bloop');
  }
});

module.exports = startBot;