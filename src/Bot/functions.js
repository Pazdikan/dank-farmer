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
     * @param {String} string The message to be sent
     * @param {Object} settings Message settings
     * @param {Message} settings.replyTo The message to reply to
     * @param {TextChannel} settings.channel The channel to send the message to
     */
    realisticMessage: async function (string, settings) {
        if (settings.replyTo) {
            settings.replyTo.channel.sendTyping();
            await module.exports.sleep(module.exports.randomInt(1000, 3000));
            return settings.replyTo.reply(string);
        }

        settings.channel.sendTyping();
        await module.exports.sleep(module.exports.randomInt(1000, 3000));
        return settings.channel.send(string);
    },
};
