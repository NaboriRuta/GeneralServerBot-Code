module.exports.run = (client, message, args) => {
    let num1 = Math.floor(Math.random() * 10)
    let num2 = Math.floor(Math.random() * 10)
    let num3 = Math.floor(Math.random() * 10)
    let errorNum = `${num1}${num2}${num3} `
    let RNG1 = Math.floor(Math.random() * 10)
    let RNG2 = Math.round(Math.random())
    let part1 = ""
    let part2 = ""
    let errorText;

    switch (RNG1) {
        case 0:
            part1 = "Number of Cares to Give"
            break
        case 1:
            part1 = "Bets"
            break
        case 2:
            part1 = "Gateway"
            break
        case 3:
            part1 = "Caring"
            break
        case 4: 
            part1 = "Abilities"
            break
        case 5:
            part1 = "Excuses"
            break
        case 6:
            part1 = "Website"
            break
        case 7:
            part1 = "Error"
            break
        case 8:
            part1 = "Reasons Why I Should Care"
            break
        case 9:
            part1 = 'Argument of "Who Cares"'
    }

    switch (RNG2) {
        case 0:
            part2 = " Not Found"
            errorText = part1 + part2
            break
        case 1:
            part2 = "Invalid "
            errorText = part2 + part1
            break
    }

    let errorMessage = errorNum + errorText

    message.channel.send({content: errorMessage})
}

module.exports.name = "randomerror"