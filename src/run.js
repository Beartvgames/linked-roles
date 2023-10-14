import fetch from 'node-fetch';
import config from './config.js';

const TOKEN = config.DISCORD_TOKEN;
const GUILD_ID = config.GUILD_ID;

const setBotOnline = async () => {
  const endpoint = `https://discord.com/api/v10/guilds/${GUILD_ID}/members/@me`;
  const data = {
    op: 3,
    d: {
      status: 'online',
      afk: false,
      since: null,
      game: null
    }
  };

  try {
    const response = await fetch(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bot ${TOKEN}`
      }
    });

    if (response.ok) {
      console.log('Bot online');
    } else {
      console.error('BUG:', response.statusText);
    }
  } catch (error) {
    console.error('ERROR POST:', error.message);
  }
};

setBotOnline();
