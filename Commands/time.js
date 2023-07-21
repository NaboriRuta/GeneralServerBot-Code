const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
const embed = new Discord.EmbedBuilder() 
  .setFooter({text: "Here is the time!", iconURL: "https://cdn.discordapp.com/attachments/896053678065209354/963234552594178068/Screen_Shot_2022-04-11_at_6.28.11_PM.jpeg"})
  .setTimestamp()
  .setColor("White")

  message.channel.send({embeds: [embed]})
}

module.exports.name = "time"