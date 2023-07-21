const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  
  let generator1 = Math.floor(Math.random() * 6)
  let generator2 = Math.floor(Math.random() * 6)


  let part1 = "";
  let part2 = "";

  switch (generator1) {
    case 0:
      part1 = "you're more intelligent than ";
      break;
    case 1:
      part1 = "Your genius is comparable to ";
      break;
    case 2:
      part1 = "You're as strong as "
      break
    case 3:
      part1 = "You are better than "
      break
    case 4:
      part1 = "I can't tell the difference between you and "
      break
    case 5:
      part1 = "You have more potential than "
      break
  } 

  switch (generator2) {
    case 0:
      part2 = "Albert Einstein"
      break
    case 1:
      part2 = 'Dwayne "The Rock" Johnson'
      break
    case 2:
      part2 = "LeBron James"
      break
    case 3:
      part2 = "any gigachad"
      break
    case 4:
      part2 = "PewDiePie"
      break
    case 5:
      part2 = "DanTDM"
      break
  }

  let creativeCompliment = part1 + part2
  
  const embed = new Discord.EmbedBuilder()
  .setTitle("Your Creative Compliment:")
  .setAuthor({name: "GeneralServerBot (GSB)", iconURL: "https://cdn.discordapp.com/attachments/896053678065209354/962921198013005854/IMG_0705.jpeg"})
  .setDescription(creativeCompliment)
  .setFooter({text: "This bot is still in construction."})
  .setTimestamp()
  .setColor("Green")

  message.channel.send({embeds:[embed]})
}

module.exports.name = "creativecompliment"