//main file app.js
const Discord = require('discord.js');
const Config = require('./config/config.json');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('MemeMachine is ready!');
});

bot.on('error', e => {
  console.error(e);
});

bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(Config.prefix)) return;

  let command = message.content.split(' ')[0];
  command = command.slice(Config.prefix.length);
  console.log(command);

  let args = message.content.split(' ').slice(1);
  console.log(args);

  let author = message.author;
  console.log(author);

  if (command === "mememe"){
    //this is just a fun command to play with. it doesn't relate to the RPG
    //elements of this bot. basically convert letters into emoji letters
    let memeMessage = translateToMeme(message.content.split(`${Config.prefix}${command}`)[1]);
    message.delete();
    message.channel.sendMessage(`${message.author.username}:`);
    message.channel.sendMessage(memeMessage);
  }
});

function translateToMeme(message){
  var memeMessage = "";
  message.split("").map(function(elem){
      if (/[a-zA-Z]/.test(elem)){
        memeMessage += ':regional_indicator_' + elem.toLowerCase() + ':';
      }
      else{
        memeMessage += elem;
      }
      memeMessage += " ";
  })
  return memeMessage;
}

bot.login(Config.token);
