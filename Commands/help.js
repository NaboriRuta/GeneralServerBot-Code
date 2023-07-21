const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  const commands = client.commands.map(command => command.name).join(", ")
  const embed1 = new Discord.EmbedBuilder()
  .setTitle(`Total Commands: ${client.commands.size}`)
  .setAuthor({name:"GeneralServerBot (GSB)", iconURL: "https://cdn.discordapp.com/attachments/896053678065209354/962921198013005854/IMG_0705.jpeg"})
  .setDescription(commands)
  .setFooter({text: 'My prefix is "GSB!"'})
  .setTimestamp()
  .setColor("Navy")

  const embed2 = new Discord.EmbedBuilder()
  .setTitle("Is anything bothering you with GSB? Click here to give your feedback!") .setURL("https://sites.google.com/view/generalserverbot/home/suggestions")
.setTimestamp()
.setColor("Yellow")
  message.channel.send({embeds: [embed1, embed2]})
}

module.exports.name = "help"