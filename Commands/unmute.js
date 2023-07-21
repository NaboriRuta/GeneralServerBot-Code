module.exports.run = (client, string, args) => {
   if(message.member.hasPermission("ADMINISTRATOR")) {
 let member = message.mentions.members.first()
 if(!member) message.channel.send("mention someone to unmute!")
 else {
 member.roles.remove("Muted")
 message.channel.send("Member has been succesfully unmuted.")
 }

 }else {
 message.reply("You don't have permission to do that!")
 }
}

module.exports.name = "unmute"