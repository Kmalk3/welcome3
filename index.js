const Discord = require('discord.js'),
    client = new Discord.client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("520234723335733259");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Welcome To Server Darkness :GWcodesRuby: 
   # :GWinfxHeart:  حيآك في سيرفرنآ ,** `), 4000)        
}


client.login(process.env.TOKEN);