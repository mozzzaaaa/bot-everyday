const { EmbedBuilder } = require("@discordjs/builders");
const { GuildMember } = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    execute(member) {
        const {user, guild} = member;
        const welcomeChannel = member.guild.channels.cache.get(`1242726745312989215`);
        const welcomeMessage = `Halo <@${member.id}>, Jangan lupa untuk membaca semua peraturan yang sudah tertera
        \n- <#1242732775883149374>
        \n- <#1242732775883149374>
        \n- <#1242732402019667992>
        \n- <#1242728697832935436>`

        const welcomeEmbed = new EmbedBuilder()
        .setTitle(`Selamat Datang Di **#TERRALAND**`)
        .setDescription(welcomeMessage)
        .setColor(0x037821)
        .addFields({name:'Total Member', value: `${guild.memberCount}`})
        .setTimestamp();

        welcomeChannel.send({embeds: [welcomeEmbed]});
    }
}