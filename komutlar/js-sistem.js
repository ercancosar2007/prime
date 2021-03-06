const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('| Üzgünüm Bu Komutu Kullana Bilmen İçin `Yönetici` Yetkisine Sahip Olmalısın!')

    let onaylananbot = await db.fetch(`jsackapat${message.guild.id}`)
    let codework2 = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL({dynamic:true}))
    .setTimestamp()
    .setFooter(`${message.author.tag} Tarafından İstendi.`)
    .setDescription(`Bilgi
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    **JavaScript Sistemi \`${onaylananbot ? 'Açık' : 'Kapalı' }\` **
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**`)
    message.channel.send(`${message.author}`, codework2)
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["bot-sorgula","bot-sorgulat","botsorgulat"],
 permLevel: 0,
};
exports.help = {
 name: 'jssorgula'
};