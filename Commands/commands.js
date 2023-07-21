const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  const embed = new Discord.EmbedBuilder()
  .setTitle("Commands")
  .setURL("https://sites.google.com/view/generalserverbot/commands")
  .setAuthor({name:"GeneralServerBot (GSB)", iconURL: "https://cdn.discordapp.com/attachments/896053678065209354/962921198013005854/IMG_0705.jpeg"})
  .setDescription('Here are all of the commands everyone can use.')
  .addFields(
   {name:"GSB!hello", value: "A simple greeting and polite question on how to help you"},
   {name:"GSB!about", value: "GeneralServerBot will tell you all about itself."}, 
   {name: "GSB!help", value: "A simpler version of this screen, and a link to suggest bot commands."},
   {name: "GSB!say", value: "GSB can say what you want it to say with this!"},
   {name: "GSB!time", value: "GSB will tell you the current time."},
   {name: "GSB!ping", value: 'Replies with "pong 🏓".'},
   {name: "GSB!creativeinsult", value: "Gives you a randomly generating creative \"insult\"."},
   {name: "GSB!creativecompliment", value: "Gives you a randomly generating creative compliment."},
   {name: "GSB!spam", value: "It's the say command, but repeated 15 times, or as many times as you'd like."},
  )
  .setFooter({text:"This bot is still in construction."})
  .setTimestamp()
  .setColor("Orange")
    
    message.channel.send({embeds:[embed]})
}

module.exports.name = "commands"