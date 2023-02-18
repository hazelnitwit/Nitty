import { SlashCommandBuilder, CommandInteraction } from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('haziy')
        .setDescription('Information related to Hazel\'s creator, haziy.'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply({
            content: 'HAZiY was originally a collab group, but now refers to Hazel\'s creator.\nTo contact haziy for professional purposes, go to https://twitter.com/BeHaziy',
            ephemeral: true
        });
    },
};