//create discord bot
const Discord = require('discord.js');
const bot = new Discord.Client();

//connect discord to server
bot.login(process.env.BOT_TOKEN);

//create oath2handler with rest
const rest = require('restler');
const oauth2 = require('simple-oauth2').create({
    client: {""};
    secret: {""};   
}); 

//create oath2 server  
const oauth2Server = rest.createJsonClient({
    url: 'https://discordapp.com/api/oauth2/',
    headers: {  'Authorization': 'Bot ' + process.env.BOT_TOKEN }
}); 
