const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
   const codeworkjssistem = await db.fetch(`jsackapat${message.guild.id}`)
  if(codeworkjssistem == null) return message.channel.send('JavaScript Sistemi Aktif Değil!');
  
  const codeworkjs = await db.fetch(`jskanal${message.guild.id}`)
  if(codeworkjs == null) return message.channel.send('Bot Komut Kanalı Ayarlanmamış!');
  if (message.channel.id !== codeworkjs) return message.channel.send(`Bu Komutu Sadece <#${codeworkjs}> Kanalında Kullanabilirsiniz!`);

  const codeworkjsrol = await db.fetch(`jsrolü${message.guild.id}`)
  if(codeworkjsrol == null) return message.channel.send('JavaScript Rolü Ayarlanmamış!');
  
  if (message.member.roles.cache.has(db.fetch(`jsrolü${message.guild.id}`))) return message.reply("JavaScript Rolüne zaten sahipsin!")
  message.member.roles.add(db.fetch(`jsrolü${message.guild.id}`))
  const embed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(':okey: | Başarılı! Javascript Rolü Verildi.')
      .addField("**:Duyur: Diğer Roller Hakkında Bilgi Almak İçin;**","<#722750731664490538>")
      .setFooter(`${message.author.tag} Tarafından İstendi.`)
      message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildonly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "js"
}