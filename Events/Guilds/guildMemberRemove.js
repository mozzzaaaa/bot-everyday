const { EmbedBuilder } = require("@discordjs/builders");
const { GuildMember } = require("discord.js");

module.exports = {
    name: "guildMemberRemove",
    execute(member) {
        const {user, guild} = member;
        const welcomeChannel = member.guild.channels.cache.get(`1071930681682317436`);
        const welcomeMessage = `Selamat Jalan, Makasih dah mampir **<@${member.id}>** telah keluar server **#EVERYDAY ROLEPLAY INDONESIA**`

        welcomeChannel.send(welcomeMessage);
    }
}