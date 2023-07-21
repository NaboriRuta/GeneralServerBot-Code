require ("dotenv").config()

const express = require("express");
const app = express();
const {token} = require("./config.json")
const path = require("node:path")
const {Client, Collection, Events, GatewayIntentBits, ActivityType} = require("discord.js")
app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const client = new Client({intents: [GatewayIntentBits.Guilds, "Guilds", "GuildMessages", "MessageContent"], allowedMentions: {_parse: ["users"]}})

client.token = token

const fs = require("node:fs")
const prefix = "GSB!"

client.commands = new Collection()
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))
for(file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}

client.slashCommands = new Collection()
const slashCommandsPath = path.join(__dirname, "Slash-Commands")
const slashCommandFiles = fs.readdirSync(slashCommandsPath).filter(file => file.endsWith(".js"))

for (const file of slashCommandFiles) {
  const filePath = path.join(slashCommandsPath, file)
  const slashCommand = require(filePath)

  if ('data' in slashCommand && "execute" in slashCommand) {
    client.slashCommands.set(slashCommand.data.name, slashCommand);
  } else {
    console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`)
  }
}

client.on("messageCreate", message => {
  if(message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if(!command) return message.channel.send({content: "That command doesn't exist yet."})
    command.run(client, message, args)
  }
})

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const slashCommand = interaction.client.slashCommands.get(interaction.commandName)

  if (!slashCommand) {
    console.error(`No command matching ${interaction.commandName} was found.`)
    return
  }

  try {
    await slashCommand.execute(interaction)
  } catch (error) {
    console.error(error)
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({content: "There was an error while executing this command!", ephemeral: true})
    } else {
      await interaction.reply({content: "There was an error while executing this command!", ephemeral: true})
    }
  }
})

client.on('ready', () => {
 client.user.setPresence({activities: [{name: "GSB!help", type: ActivityType.Playing}]})
})

client.login(process.env.token);