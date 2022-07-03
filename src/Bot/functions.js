const { Message, TextChannel } = require('discord.js-selfbot-v13');

module.exports = {
    randomInt: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    randomArray: function (array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    sleep: function (ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    },

    /**
     *
     * @param {String} string
     * @param {Object} settings
     * @param {Message} settings.replyTo
     * @param {TextChannel} settings.channel
     */
    realisticMessage: async function (string, settings) {
        if (settings.reply) {
            settings.replyTo.channel.sendTyping();
            await sleep(randomInt(1000, 3000));
            return settings.replyTo.reply(string);
        }

        settings.channel.sendTyping();
        await sleep(randomInt(1000, 3000));
        return settings.replyTo.reply(string);
    },
};
