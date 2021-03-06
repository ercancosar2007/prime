const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let jsrol = message.mentions.roles.first()
  if (!jsrol) return message.channel.send('Lütfen JavaScript rolünü etiketlermisin?')
   
  db.set(`jsrolü${message.guild.id}`, jsrol.id)
  message.channel.send(`JavaScript Rolü Başarıyla Ayarlandı; **${jsrol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'jsrol-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};