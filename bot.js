const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN); //сюда помещается токен, который дал botFather
bot.start((ctx) => ctx.reply("Добро пожаловать")); //ответ бота на команду /start
bot.help((ctx) => ctx.reply("Отправь мне стикер")); //ответ бота на команду /help
bot.on("sticker", (ctx) => ctx.reply("👍")); //bot.on это обработчик введенного юзером сообщения, в данном случае он отслеживает стикер, можно использовать обработчик текста или голосового сообщения
bot.hears("Привет", (ctx) => ctx.reply("Привет как ты?")); // bot.hears это обработчик конкретного текста, данном случае это - "hi"
bot.on("text", (ctx) => ctx.reply(`Я не знаю ответа на твой вопрос ${ctx.state.role}`));
bot.launch();
console.log("Успешный запуск");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
