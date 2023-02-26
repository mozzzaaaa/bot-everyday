const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`${client.user.username} Online`);

    client.user.setPresence({
      activities: [{ name: `EVERYDAY ROLEPLAY`, type: ActivityType.Watching }],
      status: 'idle',
    });
  }
}
