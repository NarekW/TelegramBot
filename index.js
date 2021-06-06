const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { Telegraf } = require("telegraf");
require("dotenv").config();
// const fetch = require("node-fetch");

const bot = new Telegraf(process.env.BOT_TOKEN); //сюда помещается токен, который дал botFather

bot.start((ctx) => ctx.reply(`[⁠](https://i.imgur.com/NPjnkSL.gif) Смурфик, поболтаем?👅`, 
{parse_mode: 'Markdown', disable_web_page_preview: false})); //ответ бота на команду /start

bot.help((ctx) => ctx.reply("Я пока не знаю как тебе помочь")); //ответ бота на команду /help [${ctx.message.from.first_name}](https://t.me//${ctx.message.from.username})
bot.on("sticker", (ctx) => ctx.reply("👍")); //bot.on это обработчик введенного юзером сообщения, в данном случае он отслеживает стикер, можно использовать обработчик текста или голосового сообщения
bot.hears("Привет", (ctx) => ctx.reply("Здравствуйте")); // bot.hears это обработчик конкретного текста, данном случае это - "hi"
bot.hears("Как дела?", (ctx) => ctx.reply("Зашибись, а у тебя?")); 
bot.hears("У тебя есть время поговорить?", (ctx) => ctx.reply("У меня всегда есть время для тебя😊")); 
bot.command('pipe', (ctx) => ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' }));

// bot.command("photo", async (ctx) => {
//   const response = await fetch("https://aws.random.cat/meow");
//   const data = await response.json();
//   return ctx.replyWithPhoto(data.file,{ caption: "cat photo" });
// });


bot.on("text", (ctx) => ctx.reply(`Рад за тебя.`, 
{parse_mode: 'Markdown', disable_web_page_preview: false}));
bot.launch();

console.log("Бот запушен!");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
