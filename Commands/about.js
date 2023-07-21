const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  const embed = new Discord.EmbedBuilder()
  .setTitle("About Me") .setURL("https://sites.google.com/view/generalserverbot")
  .setAuthor({name: "GeneralServerBot (GSB)", iconURL: "https://cdn.discordapp.com/attachments/896053678065209354/962921198013005854/IMG_0705.jpeg"})
  .setDescription("I am GeneralServerBot, a bot made for general server management and made by NaboriRuta.")
  .setFooter({text: "Here's my About me!"})
  .setColor("Blue")
  .addFields(
   {name:"Commands", value: 'Type "GSB!commands" for a list of commands to use', inline: true},
   {name: "Greetings", value: 'Type "GSB!say" for GeneralServerBot to say what you want it to say.', inline: true}
  )
  .setTimestamp() .setThumbnail("https://cdn.discordapp.com/attachments/896053678065209354/962921198013005854/IMG_0705.jpeg")

  message.channel.send({embeds:[embed]})
}

module.exports.name = "about"