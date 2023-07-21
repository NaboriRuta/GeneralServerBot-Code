// this command is in troubleshooting
module.exports.run = (client, message, args) => {
  const member = message.mentions.members.first()
  if (!member) return message.channel.send('You need to mention a user/provide an ID available in this server')
  if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('You lack the required permissions')
  if (member.permissions.has('KICK_MEMBERS') || member.permissions.has('BAN_MEMBERS')) return message.channel.send("This user seems to be a mod/admin and can't be kicked")
  
  try {
   member.unban().then(() => {
   message.channel.send(`Unbanned ${member}`)
   })
   } catch (err) {
   console.log(err)
   message.channel.send('Oops, something went wrong ')
  }
}

module.exports.name = "unban"