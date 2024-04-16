const fs = require('fs');
let game_number= 1;
let possible_game_total = 0;

let max_red = 12;
let max_green = 13;
let max_blue = 14;
let round_impossible = false;

fs.readFile('advent_day2/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const games = data.split('\n');
    for (const game of games) {
        console.log("Game " + game_number++);
        round_impossible = false;
        let red_exceeds = false;
        let green_exceeds = false;
        let blue_exceeds = false;

        const rounds = game.split(';');
        for (const round of rounds) {
            if (round_impossible) { 
                console.log("Round not possible");
                break;
            }
            round_impossible = false;
            let simplifiedRound = round.substring(round.lastIndexOf(":")+1, round.length);
            let cubeNumbers = simplifiedRound.split(',');
            for (let cubeNumber of cubeNumbers) {
                if (cubeNumber.includes("red")) {
                    let redNumber = parseInt(cubeNumber.match(/(\d+)/)[0]);
                    red_exceeds = redNumber > max_red;
                    if (red_exceeds) {
                        console.log("red exceeds");
                    }
                } else if (cubeNumber.includes("green")) {
                    let greenNumber = parseInt(cubeNumber.match(/(\d+)/)[0]);
                    green_exceeds = greenNumber > max_green;
                    if (green_exceeds) {
                        console.log("green exceeds");
                    }
                } else if (cubeNumber.includes("blue")) {
                    let blueNumber = parseInt(cubeNumber.match(/(\d+)/)[0]);
                    blue_exceeds = blueNumber > max_blue;
                    if (blue_exceeds) {
                        console.log("blue exceeds");
                    }
                }
            }
            round_impossible = red_exceeds || green_exceeds || blue_exceeds;
            
            if(round_impossible) {
                console.log("Round not possible, Leaving game.");
                break;
            }
        }
        if(!round_impossible) {
            console.log("Game possible");
            possible_game_total += (game_number -1);
            console.log("Possible game total " + possible_game_total);
        }

    }
    
});