const Discord = require('discord.js');
const dotenv = require('dotenv').config();

const Module = require('../Module/module.js').MainClass;



exports.MainClass = class BOT extends Module {
    final() {
        this.log('Event', 'Finalized the module.');
    }

    init() {
        this.token = process.env.ELEMBOT_DISCORD_TOKEN;
        this.client = new Discord.Client();

        this.client.login(this.token)
            .then(() => {
                this.log('Event', 'Succeeded to login.');
            })
            .catch((exep) => {
                this.log('Event', 'Failed to login.');
            });
    }
}
