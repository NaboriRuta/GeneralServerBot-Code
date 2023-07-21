module.exports.run = (client, message, args) => {
  if(message.member.permissions.has("TIMEOUT_MEMBERS")) { // checks if the person has the ability to mute others
 let member = message.mentions.members.first()
 if(!member) message.channel.send("mention someone to mute!") // no member, no mute
 else {
 member.roles.add("Muted")
 message.channel.send("Member has been succesfully muted.")
 } // does the actual muting

 }else {
 message.reply("You don't have permission to do that!") // no permission, not allowed
 }
}

module.exports.name = "mute"