let secretNumber = 1;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkGuess (number) {
    if (Number(number) > secretNumber) {
        console.log('Too high!');
        return false;
    } else if (Number(number) < secretNumber) {
        console.log('Too low!');
        return false;
    } else if (Number(number) === secretNumber) {
        console.log('Correct!');
        return true;
    }
}

function askGuess (bool) {
    rl.question('Enter a guess: ', answer => {
        bool = checkGuess(answer);
        if (bool === false) {
            askGuess(bool);
        } else if (bool === true) {
            rl.close();
        }
    });
}

function randomInRange (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomInRange(5, 17));

askGuess();
