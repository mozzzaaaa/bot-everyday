const { EmbedBuilder } = require("@discordjs/builders");
const { GuildMember } = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    execute(member) {
        const {user, guild} = member;
        const welcomeChannel = member.guild.channels.cache.get(`1071508303617724436`);
        const welcomeMessage = `Hai <@${member.id}>\nDimohon untuk membaca <#1071785317159411843>\ndan ambil role di <#1071780758286516275>\nJika kalian ingin meminta bantuan atau ada trouble silahkan hubungi Admin yang ada.\n\nSelamat Bermain Di **#EVERYDAY ROLEPLAY**!\nRegards kami Tim Everyday\nTerima Kasih👋\n`

        const welcomeEmbed = new EmbedBuilder()
        .setTitle(`Selamat Datang Di **EVERYDAY ROLEPLAY**`)
        .setDescription(welcomeMessage)
        .setColor(0x037821)
        .addFields({name:'Total Member', value: `${guild.memberCount}`})
        .setTimestamp();

        welcomeChannel.send({embeds: [welcomeEmbed]});
    }
}