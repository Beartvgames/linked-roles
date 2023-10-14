import fetch from 'node-fetch';
import config from './config.js';

const setBotOnline = async () => {
  const endpoint = 'https://discord.com/api/v10/users/@me/settings';
  const data = {
    status: 'online'
  };

  try {
    const response = await fetch(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bot ${config.DISCORD_TOKEN}`
      }
    });

    if (response.ok) {
      console.log('Estado del bot actualizado a online');
    } else {
      console.error('Error al actualizar el estado del bot:', response.statusText);
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
  }
};

setBotOnline();
