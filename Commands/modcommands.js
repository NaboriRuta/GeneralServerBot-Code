const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  const embed = new Discord.EmbedBuilder()
  .setTitle("Moderator + Administrator Commands")
  .setAuthor({name: "GeneralServerBot (GSB)", iconURL: "https://cdn.discordapp.com/attachments/896053678065209354/962921198013005854/IMG_0705.jpeg"})
  .setDescription("This is a list of all the commands only Mods and Admins can use.")
  .addFields(
    {name: "GSB!kick", value: "Remove someone from the server if they're being incredibly disrespectful to the rules or the people."},
  {name: "GSB!mute", value: "Silence someone if they're misbehaving."},
  {name: "GSB!unmute", value: "Remove someone's silencing if they've served their purpose."},
  {name: "GSB!ban", value: "Remove someone from the server permanently or until they're unbanned."},
  {name: "GSB!unban", value: "Allow someone who's banned back into the server. (This is still being worked on.)"}
  )
  
  .setFooter({text: "This bot is still in construction."})
  .setTimestamp()
  .setColor("DarkOrange")

  message.channel.send({embeds: [embed]})
}

module.exports.name = "modcommands"