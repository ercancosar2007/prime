const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
const codework = args[0]
if (!codework) {
const embed = new Discord.MessageEmbed()
.setDescription(`JavaScript sistemini açmak için ${ayarlar.prefix}**jssistem aç** veya ${ayarlar.prefix}**jssistem kapat** yazmalısın!`)
.setColor('RED')
return message.channel.send(embed)
}
 
if (codework == 'aç') { 
let açıkkapalı = await db.fetch(`jsackapat${message.guild.id}`)
db.set(`jsackapat${message.guild.id}`,'açık')
  
const embed = new Discord.MessageEmbed()
.setDescription(`JavaScript Sistemi Başarıyla Açıldı!`)
.setColor('GREEN')
return message.channel.send(embed)
}
  
if (codework == 'kapat') {
let açıkkapalı = await db.fetch(`jsackapat${message.guild.id}`)
db.delete(`jsackapat${message.guild.id}`)
db.delete(`jskanal${message.guild.id}`)
db.delete(`jsrolü${message.guild.id}`)

const embed = new Discord.MessageEmbed()
.setDescription(`JavaScript Sistemi Başarıyla Kapatıldı!`)
.setColor('GREEN')
return message.channel.send(embed)
}
  
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'jssistem',
  description: 'reklam engellemeyi açar',
  usage: 'reklam-engel'
}