const {SlashCommandBuilder} = require("discord.js")
const wait = require("node:timers/promises").setTimeout

module.exports = {
    data: new SlashCommandBuilder()
    .setName("exposed")
    .setDescription("Not really. Grabs your username, the day you joined Discord, and the day you joined the server."),

    async execute(interaction) {
        await interaction.reply(`Your name is ${interaction.user.username}, you joined Discord on ${interaction.member.joinedAt}. Have fun sleeping tonight!`)
        await wait(4000)
        await interaction.followUp({content: "This isn't very intimidating, is it?", ephemeral: true})
        await wait(2000)
        await interaction.followUp({content: "Don't worry, no one's using this. I don't even know how they would use it.", ephemeral: true})
    }
}