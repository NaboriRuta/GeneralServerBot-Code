const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("discordid")
        .setDescription("An unofficial Discord ID to have that is neither stored nor used anywhere.")
        .addStringOption(option => 
            option.setName("name")
            .setDescription("Put either your real name or your username here.")
            .setRequired(true)
        )
        .addStringOption(option => 
            option.setName("role")
            .setDescription("Choose one of the roles you have and list it here.")
            .setRequired(true)
        )
        .addNumberOption(option => 
            option.setName("weight")
            .setDescription("In pounds. Numbers only!")
            .setRequired(true)
        )
        .addIntegerOption(option => 
            option.setName("height")
            .setDescription("In feet. Whole numbers only!")
            .setRequired(true)
        )
        .addNumberOption(option => 
            option.setName("leftover")
            .setDescription("Inches leftover from your height in feet. Numbers only! (If none leftover, put 0)")
            .setRequired(true)
        ),

    async execute(interaction) {
        let embed = new EmbedBuilder()
        .setTitle(`${interaction.options.getString("name")}`)
        .setThumbnail(interaction.user.displayAvatarURL())
        .setDescription(`${interaction.options.getString("role")}`)
        .addFields(
            {name: "Weight", value: `${interaction.options.getNumber("weight")} lbs`, inline: true},
            {name: "Height", value: `${interaction.options.getInteger("height")} ft ${interaction.options.getNumber("leftover")} in`, inline: true}
        )
        .setFooter({text: "This is neither stored nor used anywhere. It's just a fun little novelty to have."})
        .setColor("DarkButNotBlack")
        
        await interaction.reply({embeds: [embed]})
    },
}