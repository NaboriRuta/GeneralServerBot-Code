module.exports.run = (client, message, args) => {

  let numOfTimes = args[0]
  let toSpam = args.slice(1).join(" ")
  
  if (isNaN(numOfTimes)) {
    numOfTimes = 15
    toSpam = args.join(" ")
  } else if (numOfTimes >= 50) return message.channel.send("This'll be too chaotic, and will most likely destroy me.")
  
  if (!toSpam) return message.channel.send("You have to provide something for me to spam.")
  
  if (toSpam) {
    for (let i = 0; i < numOfTimes; i++) {
      message.channel.send({content: toSpam})
    } 
  }
}

module.exports.name = "spam"