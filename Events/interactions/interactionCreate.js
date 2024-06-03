const { CommandInteraction } = require('discord.js');

module.exports = {
    name: "interactionCreate",
    
    async execute(interaction, client) {
        try {
            if (interaction.isChatInputCommand()) {
                const command = client.commands.get(interaction.commandName);

                if (!command) {
                    await interaction.reply({ content: "outdated command" });
                    return;
                }

                await command.execute(interaction, client);
            } else if (interaction.isButton()) {
                await interaction.deferReply({ ephemeral: true });

                const role = interaction.guild.roles.cache.get(interaction.customId);
                if (!role) {
                    await interaction.editReply({
                        content: "Saya tidak bisa menemukan role ini",
                    });
                    return;
                }

                const hasRole = interaction.member.roles.cache.has(role.id);

                if (hasRole) {
                    await interaction.member.roles.remove(role);
                    await interaction.editReply(`Kamu berhasil mengmbil role ${role}.`);
                } else {
                    await interaction.member.roles.add(role);
                    await interaction.editReply(`Kamu menghapus role ${role} dari kamu.`);
                }
            }
        } catch (error) {
            console.error(error);

            if (interaction.deferred || interaction.replied) {
                await interaction.editReply({ content: 'Terjadi kesalahan saat memproses interaksi.' });
            } else {
                await interaction.reply({ content: 'Terjadi kesalahan saat memproses interaksi.', ephemeral: true });
            }
        }
    },
};
