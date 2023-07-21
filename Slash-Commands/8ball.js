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
        let RNG = Math.floor(Math.random() * 21);
        let answer;

        switch (RNG) {
            case 0:
                answer = "YUH UH"
                break
            case 1:
                answer = "It is decidedly so."
                break
            case 2:
                answer = "Without a doubt."
                break
            case 3:
                answer = "Yes, definitely."
                break
            case 4:
                answer = "yaaasssss queen slayyy :nail_care:"
                break
            case 5:
                answer = "As I see it, yes."
                break
            case 6:
                answer = "Most likely."
                break
            case 7:
                answer = "NUH UH"
                break
            case 8:
                answer = "indeed my dude"
                break
            case 9:
                answer = "Signs point to yes."
                break
            case 10:
                answer = "HUH UH?"
                break
            case 11:
                answer = "Ask again later."
                break
            case 12:
                answer = "You shall never know muahahahahahahah"
                break
            case 13:
                answer = "Cannot predict now."
                break
            case 14:
                answer =  "Outlook not so good."
                break
            case 15:
                answer = "Don't count on it."
                break
            case 16:
                answer = "My reply is no."
                break
            case 17:
                answer = "My horses say no :racehorse: :horse:"
                break
            case 18:
                answer = "Concentrate and ask again."
                break
            case 19:
                answer = "Outlook good."
                break
            case 20:
                answer = "egg :egg: :egg: :egg: :egg: :egg:"
                break
        }

        let embed = new EmbedBuilder()
        .setTitle("The Magic 8 Ball")
        .addFields(
            {name: "What You Asked:", value: `${interaction.options.getString("question")}`, inline: true},
            {name: "The Answer:", value: `${answer}`, inline: true}
        )
        .setColor("DarkButNotBlack")

        await interaction.reply({embeds: [embed]})
    }
}