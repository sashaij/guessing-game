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

function askGuess (limit, bool, count=1) {
    rl.question('Enter a guess: ', answer => {
        bool = checkGuess(answer);
        if (count === limit) {
            console.log("You've used all the attempts.");
            console.log('You lose :(');
            rl.close();
        } else if (bool === false && count < limit) {
            askGuess(limit, bool, count+1);
        } else if (bool === true) {
            rl.close();
        }
    });
}

function randomInRange (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function askRange (aLimit) {
    let min = 0;
    let max = 0;

    rl.question("Enter a min number: ", secondQuestion)

    function secondQuestion (firstAnswer) {
        min = firstAnswer;

        rl.question('Enter max number: ', secondAnswer => {
            max = secondAnswer;
            secretNumber = randomInRange(Number(min), Number(max));
            console.log(`I'm thinking of a number between ${min} and ${max}...`);
            askGuess(aLimit);
        })
    }

}

function askLimit () {
    let limit = 0;
    rl.question('Enter the number of attempts: ', answer => {
        limit = Number(answer);
        askRange(limit);
    })
}

askLimit();


