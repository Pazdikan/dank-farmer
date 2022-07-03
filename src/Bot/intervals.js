const { Client } = require('discord.js-selfbot-v13');
const { sleep, randomInt, randomArray } = require('./functions');
const config = require('./data/config.json');

/**
 * @param {Client} client The currently logged in farm account
 */
module.exports = async (client) => {
    let channel = client.channels.cache.get(config.permissions.channel);

    // Search
    channel.sendTyping();
    await sleep(randomInt(1000, 4000));
    channel.send('pls search');

    setInterval(async () => {
        if (!client.isOn) return;

        channel.sendTyping();
        await sleep(randomInt(1000, 4000));
        channel.send('pls search');
    }, config.cooldowns.search * 1000);

    // Beg
    channel.sendTyping();
    await sleep(randomInt(1000, 4000));
    channel.send('pls beg');

    setInterval(async () => {
        if (!client.isOn) return;

        channel.sendTyping();
        await sleep(randomInt(1000, 4000));
        channel.send('pls beg');
    }, config.cooldowns.beg * 1000);

    // Dig
    channel.sendTyping();
    await sleep(randomInt(1000, 4000));
    channel.send('pls dig');

    setInterval(async () => {
        if (!client.isOn) return;

        channel.sendTyping();
        await sleep(randomInt(1000, 4000));
        channel.send('pls dig');
    }, config.cooldowns.dig * 1000);

    // Postmeme
    channel.sendTyping();
    await sleep(randomInt(1000, 4000));
    channel.send('pls pm');

    setInterval(async () => {
        if (!client.isOn) return;

        channel.sendTyping();
        await sleep(randomInt(1000, 4000));
        channel.send('pls pm');
    }, config.cooldowns.pm * 1000);

    // Deposit
    setInterval(async () => {
        if (!client.isOn) return;

        channel.sendTyping();
        await sleep(randomInt(1000, 4000));
        channel.send('pls dep all');

        channel.sendTyping();
        await sleep(randomInt(2000, 5000));
        channel.send('pls bal');
    }, config.cooldowns.deposit * 1000);
};
