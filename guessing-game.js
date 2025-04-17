let secretNumber = 12;

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

function askGuess () {
    rl.question('Enter a guess: ', answer => {
        checkGuess(answer);
        rl.close();
    });
}

function randomInRange (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomInRange(5, 17));


