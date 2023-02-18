import {CommandInteraction, SlashCommandBuilder} from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hazel')
        .setDescription('Information related to hazelnitwit.'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply({ content: 'Hazel - VTuber - 🎧 - https://twitch.tv/hazelnitwit', ephemeral: true });
    },
};