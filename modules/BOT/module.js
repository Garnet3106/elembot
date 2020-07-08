const Discord = require('discord.js');
const dotenv = require('dotenv').config();

const ModulePack = require('../Module/module.js');
const Module = ModulePack.MainClass;
const ModuleStatus = ModulePack.ModuleStatus;



exports.MainClass = class BOT extends Module {
    final() {}

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

        super.init();
    }
}
