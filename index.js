const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
const prefix = '!';

client.once('ready', () => {
  console.log(`Ready! Logged in as ${client.user.tag}`);
  client.user.setActivity('Contando facadas');
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix)) return;

  const nick = message.content.slice(prefix.length);
  let facadas = 0;

  switch (nick) {
    case 'Rato Faca Fácil#FPS':
      facadas = 22;
      break;
  }

  message.channel.send(`${nick} tem ${facadas} facadas`);
});

client.login(process.env.DISCORD_TOKEN);
