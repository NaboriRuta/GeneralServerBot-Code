const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  
  // The lists of each part of each insult
  // The insult is split up into two parts
  let part1 = ["You're built like ", "You have the same knowledge as ", "You look like ", "You're the equivalent of ", "Your overall drive is like ", "There's no difference between you and "];
  let part2 = ["pasta", "a tree", "a fridge", "a burnt chicken nugget", "bubblegum", "CaseOh"];

  // These generators pick a random one out of all possible choices
  let generator1 = Math.floor(Math.random() * part1.length);
  let generator2 = Math.floor(Math.random() * part2.length);

  // This connects the two parts of the insult
  let creativeInsult = part1[generator1] + part2[generator2];
  
  // This builds the embed (special bot message) for the insult
  const embed = new Discord.EmbedBuilder()
  .setTitle("Your Creative \"Insult\":")
  .setAuthor({name: "GeneralServerBot (GSB)", iconURL: "https://cdn.discordapp.com/attachments/896053678065209354/962921198013005854/IMG_0705.jpeg"})
  .setDescription(creativeInsult)
  .setFooter({text: "Do with this however you please."})
  .setTimestamp()
  .setColor("Red");

  message.channel.send({embeds:[embed]})
}

module.exports.name = "creativeinsult"