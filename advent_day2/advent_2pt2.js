const fs = require('fs');
let game_number= 1;

let max_red = 0;
let max_green = 0;
let max_blue = 0;
let gamePower_sum = 0;

fs.readFile('advent_day2/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const games = data.split('\n');
    for (const game of games) {
        max_red = 0;
        max_green = 0;
        max_blue = 0;
        console.log("Game " + game_number++);
        const rounds = game.split(';');
        for (const round of rounds) {
            let simplifiedRound = round.substring(round.lastIndexOf(":")+1, round.length);
            let cubeNumbers = simplifiedRound.split(',');
            for (let cubeNumber of cubeNumbers) {
                if (cubeNumber.includes("red")) {
                    let redNumber = parseInt(cubeNumber.match(/(\d+)/)[0]);
                    if (redNumber > max_red) {
                        max_red = redNumber;
                        console.log("New max red " + max_red);
                    }
                } else if (cubeNumber.includes("green")) {
                    let greenNumber = parseInt(cubeNumber.match(/(\d+)/)[0]);
                    if (greenNumber > max_green) {
                        max_green = greenNumber;
                        console.log("New max green " + max_green);
                    }
                } else if (cubeNumber.includes("blue")) {
                    let blueNumber = parseInt(cubeNumber.match(/(\d+)/)[0]);
                    if (blueNumber > max_blue) {
                        max_blue = blueNumber;
                        console.log("New max blue " + max_blue);
                    }
                }
            }

        }
        console.log("Max Red: " + max_red);
        console.log("Max Green: " + max_green); 
        console.log("Max Blue: " + max_blue);
        let gamePower = max_red * max_green * max_blue;
        gamePower_sum += gamePower;
        console.log("Game Power: " + (max_red * max_green * max_blue));
        console.log("Game Power Sum: " + gamePower_sum);
        


    }
    
});