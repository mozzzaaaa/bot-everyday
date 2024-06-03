const {
  Client,
  IntentsBitField,
  ActivityType,
} = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});


module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    let status = [
      {
        name: 'Developer Turu💤',
        type: ActivityType.Watching
      },
      {
        name: 'Owner Ngomel❗',
        type: ActivityType.Listening
      },
    ]

    console.log(`✅ ${client.user.username} Online`);

    setInterval(() => {
      let random = Math.floor(Math.random() * status.length);
      client.user.setActivity(status[random]);
    }, 10000)
  }
}
