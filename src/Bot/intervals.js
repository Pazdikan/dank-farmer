const { Client } = require('discord.js-selfbot-v13');
const {
    sleep,
    randomInt,
    randomArray,
    realisticMessage,
} = require('./functions');
const config = require('../data/config.json');

/**
 * @param {Client} client The currently logged in farm account
 */
module.exports = async (client) => {
    let channel = client.channels.cache.get(config.permissions.channel);

    async function search() {
        if (!client.isOn) return;
        await realisticMessage(`pls search`, { channel });
        setTimeout(deposit, config.cooldowns.search * 1000);
    }
    await search();

    async function beg() {
        if (!client.isOn) return;
        await realisticMessage(`pls beg`, { channel });
        setTimeout(beg, config.cooldowns.beg * 1000);
    }
    await beg();

    async function dig() {
        if (!client.isOn) return;
        await realisticMessage(`pls dig`, { channel });
        setTimeout(dig, config.cooldowns.dig * 1000);
    }
    await dig();

    async function postmeme() {
        if (!client.isOn) return;
        await realisticMessage(`pls pm`, { channel });
        setTimeout(postmeme, config.cooldowns.pm * 1000);
    }
    await postmeme();

    async function deposit() {
        if (!client.isOn) return;
        await realisticMessage(`pls dep all`, { channel });
        setTimeout(deposit, config.cooldowns.deposit * 1000);
    }
    await deposit();
};
