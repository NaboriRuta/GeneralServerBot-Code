const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
    const embed1 = new Discord.EmbedBuilder()
    .setAuthor({name: "GeneralServerBot (GSB)", iconURL: "https://cdn.discordapp.com/attachments/896053678065209354/962921198013005854/IMG_0705.jpeg"})
    .setTitle("Rush E").setURL("https://www.youtube.com/watch?v=Qskm9MTz2V4")
    .setDescription("The Original")
    .setColor("Red")

    const embed2 = new Discord.EmbedBuilder()
    .setTitle("Rush E 2").setURL("https://www.youtube.com/watch?v=FuMWmnhjCEQ")
    .setDescription("New And Improved")
    .setColor("Orange")

    const embed3 = new Discord.EmbedBuilder()
    .setTitle("Combined").setURL("https://www.youtube.com/watch?v=KPBuPBYo2wA")
    .setDescription("See Them Together")
    .setColor("Yellow")
    .setFooter({text: "E"})
    .setTimestamp()

    message.channel.send({embeds: [embed1, embed2, embed3]})
}

module.exports.name = "E";