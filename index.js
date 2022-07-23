import { Client, GatewayIntentBits } from 'discord.js';
import { got } from 'got';
import { JSDOM } from 'jsdom';
import 'dotenv/config';

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

// const getFacadasByNick = async nick => {
//   const encodedNick = encodeURIComponent(nick);
//   const url = `https://tracker.gg/valorant/profile/riot/${encodedNick}/weapons`;
//   console.log('url:', url);
//   const response = await got(url);
//   const dom = new JSDOM(response.body);
//   xpath = "//span[text()='Melee']";
//   const matchingElement = dom.window.document.evaluate(
//     xpath,
//     document,
//     null,
//     XPathResult.FIRST_ORDERED_NODE_TYPE,
//     null,
//   ).singleNodeValue;
//   const facadas =
//     +matchingElement.parentElement.parentElement.parentElement.nextElementSibling.innerText;
//   return facadas;
// };

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix)) return;

  const nick = message.content.slice(prefix.length);
  // const facadas = getFacadasByNick(nick);
  let facadas = 0;

  switch (nick) {
    case 'Rato Faca Fácil#FPS':
      facadas = 22;
      break;
  }

  message.channel.send(`${nick} tem ${facadas} facadas`);
});

client.login(process.env.DISCORD_TOKEN);
