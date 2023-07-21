const {REST, Routes} = require("discord.js")
const {clientId, guildId, token} = require("./config.json")
const fs = require("node:fs")

const slashCommands = []
const slashCommandFiles = fs.readdirSync("./Slash-Commands").filter(file => file.endsWith(".js"))
for (const file of slashCommandFiles) {
  const slashCommand = require(`./Slash-Commands/${file}`)
  slashCommands.push(slashCommand.data.toJSON())
}

const rest = new REST({version: "10"}).setToken(token);

(async () => {
  try {
    console.log(`Started refreshing ${slashCommands.length} application (/) commands.`)

    const data = await rest.put(Routes.applicationCommands(clientId), {body: slashCommands})

    console.log(`Successfully reloaded ${data.length} application (/) commands.`)
  } catch (error) {
    console.error(error)
  }
})();
