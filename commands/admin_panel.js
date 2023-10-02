const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

const data = new SlashCommandBuilder()
  .setName("admin")
  .setDescription("Creates the admin panel")
  .setDMPermission(false)
	.setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

module.exports = { data };
