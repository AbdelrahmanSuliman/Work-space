const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while (running)
{
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}:`);
    if (isNaN(guess))
    {
        window.alert("Please enter a number.");
    }
    else if (guess < minNum || guess > maxNum)
    {
        window.alert(`Please enter a number between ${minNum} and ${maxNum}.`);
    }
    else
    {
        attempts++;
        if (guess < answer)
        {
            window.alert("Higher!");
        }
        else if (guess > answer)
        {
            window.alert("Lower!");
        }
        else
        {
            window.alert(`Congratulations! You guessed the number in ${attempts} attempts!`);
            running = false;
        }
    }
}
