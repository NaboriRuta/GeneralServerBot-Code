module.exports.run = (client, message, args) => {
    let num1 = Math.floor(Math.random() * 10)
    let num2 = Math.floor(Math.random() * 10)
    let num3 = Math.floor(Math.random() * 10)
    let errorNum = `${num1}${num2}${num3} `
    let part1 = ["Number of Cares to Give", "Bets", "Gateway", "Caring", "Abilities", "Excuses", "Website", "Error", "Reasons Why I Should Care", "Argument of \"Who Cares\""];
    let part2 = [" Not Found", "Invalid "];
    let RNG1 = Math.floor(Math.random() * part1.length);
    let RNG2 = Math.floor(Math.random() * part2.length);
    let errorText;

    switch (RNG2) {
        case 0:
            errorText = part1[RNG1] + part2[RNG2];
            break;
        case 1:
            errorText = part2[RNG2] + part1[RNG1];
            break;
    }

    let errorMessage = errorNum + errorText;

    message.channel.send({content: errorMessage})
}

module.exports.name = "randomerror"