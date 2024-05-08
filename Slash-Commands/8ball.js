const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("8ball")
        .setDescription("A Magic 8 Ball Command.")
        .addStringOption(option => 
            option.setName("question")
            .setDescription("What is your question?")
            .setRequired(true)
        ),

    async execute(interaction) {
        let answer = ["YUH UH", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "yaaasssss queen slayyy :nail_care:", "As I see it, yes.",
        "Most likely.", "NUH UH", "indeed my dude", "Signs point to yes.", "HUH UH?", "Ask again later", "you shall never know muahahahahahahah", 
        "Cannot predict now.", "Outlook not so good.", "Don't count on it.", "My reply is no.", "My horses say no :racehorse: :horse:",
        "Concentrate and ask again.", "Outlook good.", "egg :egg: :egg: :egg: :egg: :egg:"];
        let RNG = Math.floor(Math.random() * answer.length);

        let embed = new EmbedBuilder()
        .setTitle("The Magic 8 Ball")
        .addFields(
            {name: "What You Asked:", value: `${interaction.options.getString("question")}`, inline: true},
            {name: "The Answer:", value: `${answer[RNG]}`, inline: true}
        )
        .setColor("DarkButNotBlack")

        await interaction.reply({embeds: [embed]})
    }
}