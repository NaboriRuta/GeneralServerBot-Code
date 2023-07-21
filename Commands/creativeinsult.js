const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  
  let generator1 = Math.floor(Math.random() * 6)
  let generator2 = Math.floor(Math.random() * 6)
  
  let part1 = ""
  let part2 = ""

// This part has the starts of each "insult"
  switch (generator1) {
    case 0:
      part1 = "You're built like "
      break
    case 1:
      part1 = "You have the same knowledge as "
      break
    case 2:
      part1 = "You look like "
      break
    case 3:
      part1 = "You're the equivalent of "
      break
    case 4:
      part1 = "Your overall drive is like "
      break
    case 5:
      part1 = "There's no difference between you and "
      break
  }

// this part has the nouns/ending of each "insult"
  switch (generator2) {
    case 0:
      part2 = "pasta"
      break
    case 1:
      part2 = "a tree"
      break
    case 2:
      part2 = "a fridge"
      break
    case 3:
      part2 = "a burnt chicken nugget"
      break
    case 4:
      part2 = "bubblegum"
      break
    case 5:
      part2 = "Nikocado Avocado"
      break
  }

  let creativeInsult = part1 + part2
  // this part sends the actual "creative" "insult"
  
  const embed = new Discord.EmbedBuilder()
  .setTitle("Your Creative Insult:")
  .setAuthor({name: "GeneralServerBot (GSB)", iconURL: "https://cdn.discordapp.com/attachments/896053678065209354/962921198013005854/IMG_0705.jpeg"})
  .setDescription(creativeInsult)
  .setFooter({text: "This bot is still in construction."})
  .setTimestamp()
  .setColor("Red")

  message.channel.send({embeds:[embed]})
}

module.exports.name = "creativeinsult"