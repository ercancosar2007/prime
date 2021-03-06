const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    .setFooter(`${message.author.username} `, message.author.avatarURL({dynamic:true}))
    return message.author.send(ozelmesajuyari); }
  
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("BLUE")
.setTitle("**Oyun Alemleri Diğer Yardım Menüsü**")

.setDescription(`
**o!sunucubilgi**
**o!sunucular**
**o!say**
**o!ping**
`)
 

return message.channel.send(EmbedCrewCode)
.then; 
  };
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};

  exports.help = {
    name: 'diğer', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-diğer'
};  