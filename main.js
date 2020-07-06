const Discord = require('discord.js');
const dotenv = require('dotenv').config();



class BOT {
    constructor(token) {
        this.token = token;
        this.client = new Discord.Client();
    }

    launch() {
        this.client.login(this.token)
            .then(() => {
                console.log('ログインが完了しました。');
            })
            .catch((e) => {
                console.log('ログインできませんでした。');
            });
    }
}



var bot = new BOT(process.env.ELEMBOT_DISCORD_TOKEN);
bot.launch();
