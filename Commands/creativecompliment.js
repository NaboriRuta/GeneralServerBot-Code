const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  
  let part1 = ["You're more intelligent than ", "Your genius is comparable to ", "You're as strong as ", "You are better than ", "I can't tell the difference between you and ", "You have more potential than "];
  let part2 = ["Albert Einstein", "Dwayne \"The Rock\" Johnson", "LeBron James", "any \"alpha\"", "PewDiePie", "DanTDM"];

  let generator1 = Math.floor(Math.random() * part1.length);
  let generator2 = Math.floor(Math.random() * part2.length);

  let creativeCompliment = part1[generator1] + part2[generator2];
  
  const embed = new Discord.EmbedBuilder()
  .setTitle("Your Creative Compliment:")
  .setAuthor({name: "GeneralServerBot (GSB)", iconURL: "https://cdn.discordapp.com/attachments/896053678065209354/962921198013005854/IMG_0705.jpeg"})
  .setDescription(creativeCompliment)
  .setFooter({text: "Do with this as you please."})
  .setTimestamp()
  .setColor("Green");

  message.channel.send({embeds:[embed]})
}

module.exports.name = "creativecompliment"