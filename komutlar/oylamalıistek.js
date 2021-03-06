const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send('Doğru Kullanım : -istek sayaç komutu')
message.reply('İstek Kodunuz başarıyla bildirildi <a:istek:706431026804818001> \nEn Yakın Zamanda <#LOG KANAL İD> Kanalından Cevap Vereceğiz. <a:dikat:706431490027814914>')
const çalanlaraselamçatışmayadevam = new Discord.MessageEmbed()
.setColor("GRAY")
.setThumbnail(message.author.avatarURL({dynamic:true}))
.addField(`İsteyen`, `${message.member}`)
.addField(`İstenilen`, type)
client.channels.cache.get('LOG KANAL İD').send(çalanlaraselamçatışmayadevam).then(codework => {
   let cw1 = codework.react('EMOJİ İD');
   let cw2 = codework.react('EMOJİ İD');
  
    })
    }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
  permLevel: 0
}

exports.help = {
    name: 'istek',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'istek <istek>'
}