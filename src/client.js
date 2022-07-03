const { Client } = require('discord.js-selfbot-v13');
const config = require('./data/config.json');
const client = new Client();

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);

    client.setting.setCustomStatus(config.account.status);

    client.isOn = true;

    require("./intervals")(client);
})

client.on("messageCreate", async (message) => {
    require("./message")(message, client);
})

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

client.login(process.env.TOKEN);