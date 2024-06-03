const { EmbedBuilder } = require("@discordjs/builders");
const { GuildMember } = require("discord.js");

module.exports = {
    name: "guildMemberRemove",
    execute(member) {
        const {user, guild} = member;
        const welcomeChannel = member.guild.channels.cache.get(`1242726745312989215`);
        const welcomeMessage = `Selamat jalan <@${member.id}>  terima kasih sudah mampir`

        welcomeChannel.send(welcomeMessage);
    }
}