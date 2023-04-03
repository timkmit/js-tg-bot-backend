const token = '6258232797:AAHYOev0wX-Ka0kBYEY8vfnC_1nwOBonIOo';

const TelegramBot = require('node-telegram-bot-api');
const webAppUrl = 'https://js-tg-bot-8qqb.vercel.app/'


const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text === '/start'){

    await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
        reply_markup:{
            keyboard: [
                [{text: 'Заполнить форму', web_app:{url: webAppUrl + '/form'}}]
            ]
        }
    })


    await bot.sendMessage(chatId, 'Заходи в наш интернет магазин по кнопке снизу!',{
        reply_markup:{
            inline_keyboard:[
                [{text:'Сделать заказ', web_app: {url:webAppUrl}}]
            ]
        }
    });
  }

    
});