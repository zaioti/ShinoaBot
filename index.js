require('dotenv').config();
const Telegraf = require('telegraf');

// inicializando o bot
const bot = new Telegraf(process.env.TOKEN);

bot.start(content => {
  const user = content.update.message.from;
  console.log(user);
  content.reply("Olá Mundo!");
});

bot.startPolling();
