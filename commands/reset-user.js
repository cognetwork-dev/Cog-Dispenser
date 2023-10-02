const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

const data = new ContextMenuCommandBuilder()
	.setName("Reset")
	.setType(ApplicationCommandType.User);

module.exports = { data };
