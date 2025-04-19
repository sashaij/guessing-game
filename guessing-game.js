let secretNumber = randomInRange(0, 100);

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
        console.log('You win!');
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

function askRange () {
    let min = 0;
    let max = 0;

    rl.question("Enter a min number: ", secondQuestion)

    function secondQuestion (firstAnswer) {
        min = firstAnswer;
        console.log(firstAnswer);

        rl.question('Enter max number: ', secondAnswer => {
            max = secondAnswer;
            console.log(secondAnswer);
            secretNumber = randomInRange(Number(min), Number(max));
            console.log(`I'm thinking of a number between ${min} and ${max}...`);
            askGuess();
        })
    }

}

askRange();


