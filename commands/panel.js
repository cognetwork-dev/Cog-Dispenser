const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

const data = new SlashCommandBuilder()
  .setName("panel")
  .setDescription("Creates the proxy panel")
  .setDMPermission(false)
	.setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

module.exports = { data };
