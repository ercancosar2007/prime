const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setDescription("CW")
message.channel.send(embed);
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['tagımız'],
permLevel: 0
}

exports.help = {
name: 'tag',

}