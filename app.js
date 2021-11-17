const { Client } = require('discord.js');
const { botIntents, prefix, commands } = require('./config/config');
const config = require('./config/default');

const client = new Client({
  intents: botIntents,
  partials: ['CHANNEL', 'MESSAGE'],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

const startBot = () => {
  console.log('Starting bot');
  try {
    client.login(config.DISCORD_TOKEN);
  } catch (error) {
    console.error('Error starting bot', { error });
  }
};

client.on('interactionCreate', (interaction) => {
  if (config.IS_DEBUG) { console.log('interactionCreate', { interaction }); }
});


client.on('messageCreate', (message) => {
  if (config.IS_DEBUG) { console.log('messageCreate', { msg: message }); }

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return; // do nothing if command is not preceded with prefix

  const command = message.content.slice(prefix.length);

  if (command === commands.getName) {
    message.reply(message.author.username);
  } else if (command === commands.beep) {
    play(message, "https://www.soundboard.com/mediafiles/mt/MTQ1MzI4MzAzMTQ1Mzgw_jwPFPnna9_2bs.mp3", 'beep boop beep =/');
    //message.reply('beep boop beep');
  } else if (command === commands.boop) {
    message.reply('boop beep boop');
  } else {
    message.reply('bloop');
  }
});

function play(message, file, text) {
  var voiceChannel = message.member.voiceChannel;

  if (!voiceChannel)
    return message.reply(text)

  voiceChannel.join()
    .then(connection => {
      const dispatcher = connection.playFile(file);
      dispatcher.on("end", end => { voiceChannel.leave() });
    })
    .catch(console.error);
}

module.exports = startBot;