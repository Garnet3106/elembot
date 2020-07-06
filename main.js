const Discord = require('discord.js');
const dotenv = require('dotenv').config();
const Module = require('./modules/module.js').Module;



class BOT extends Module {
    final() {
        this.log('Event', 'Finalized the module.');
    }

    init() {
        this.log('Event', 'Started initializing the module.');

        this.token = process.env.ELEMBOT_DISCORD_TOKEN;
        this.client = new Discord.Client();

        this.client.login(this.token)
            .then(() => {
                this.log('Event', 'Succeeded to login.');
            })
            .catch((exep) => {
                this.log('Event', 'Failed to login.');
            });

        this.log('Event', 'Initialized the module.');
    }
}



var bot = new BOT();
