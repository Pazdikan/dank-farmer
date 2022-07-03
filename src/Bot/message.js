const { Message, Client } = require('discord.js-selfbot-v13');
const { sleep, randomInt, randomArray, realisticMessage } = require('./functions');
const config = require('./data/config.json');

/**
 * @param {Message} message The message to be processed
 * @param {Client} client The currently logged in farm account
 */
module.exports = async (message, client) => {
    // console.log(`\n\n\n\n ${JSON.stringify(message, null, 0)}`);

    if (message.author.id == "270904126974590976" && message.channel.id == config.permissions.channel)  {
        if (message.embeds[0] && message.embeds[0].title == "Pending Confirmation") {
            await sleep(randomInt(1000, 2500));

            message.components[0].components.forEach(async element => {
                if (element.label == "Trade") {
                    await message.clickButton(element.customId);
                }
            });

            return;
        }

        if (message.content.includes("**Where do you want to search?**")) {
            await sleep(randomInt(1000, 4000));

            message.components[0].components.forEach(async element => {
                if (config.commands.search.includes(element.label)) {
                    await message.clickButton(element.customId);
                    return;
                }
            });

            return;
        }

        if (message.embeds[0] && message.embeds[0].author && message.embeds[0].author.name.includes("posting session")) {
            await sleep(randomInt(1000, 2500));

            message.components[0].components.forEach(async element => {
                if (element.label == "Repost") {
                    await message.clickButton(element.customId);
                }
            });

            return;
        }

        if (message.embeds[0] && message.embeds[0].title && message.embeds[0].title.includes("balance")) {
            await sleep(randomInt(1000, 2500));

            if (message.embeds[0].description.includes("100.0%")) {
                client.users.cache.get(config.permissions.main_account).dmChannel.send("**Hi!** My bank balance is full.");
            }

            return;
        }
    }

    if (!message.content.toLowerCase().startsWith(config.permissions.prefix)) return;

    if (!config.permissions.use_commands.includes(message.author.id)) return;

    let query = message.content.slice(config.permissions.prefix.length + 1);

    if (query.includes("give me")) {
        let gift = query.replace("give me ", "");

        await realisticMessage(`pls trade ${gift} ${message.author}`, {
            channel: message.channel,
        })

        await realisticMessage(randomArray(config.messages.gift), {
            replyTo: message,
        })

        return;
    }

    if (query.includes("use the command")) {
        let command = query.replace("use the command ", "");

        await realisticMessage(randomArray(config.messages.command), {
            replyTo: message,
        })

        await realisticMessage(`${command}`, {
            replyTo: message,
        })

        return;
    }

    if (query.includes("stop") || query.includes("chill")) {
        await realisticMessage(randomArray(config.messages.stop), {
            replyTo: message,
        })

        return client.isOn = false;
    }

    if (query.includes("work") || query.includes("start")) {
        await realisticMessage(randomArray(config.messages.start), {
            replyTo: message,
        })

        return client.isOn = true;
    }
}