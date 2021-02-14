require('dotenv').config()
const Discord = require('discord.js');
const discordClient = new Discord.Client();

discordClient.on('ready', ()=> 
{
    console.log(`Logged in as ${discordClient.user.tag}`)
})

discordClient.on('message', (msg) => 
{
    console.log(msg.content);
})

discordClient.login(process.env.DISCORDTOKEN);