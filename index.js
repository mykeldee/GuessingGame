console.log("Welcome to the number guessing game");
username = prompt("Please enter your username: ");

getNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const x = 1;
let y = 3;
let marks = 0;

num = getNumber(x, y);
console.log(num);
guessedNum = prompt(`Guess a number between ${x} and ${y}: `);
guessedNum = parseInt(guessedNum);


while (guessedNum == num) {
  console.log("You guessed correctly");
  y++;
  marks++;
  num = getNumber(x, y);
  console.log(num);
  guessedNum = prompt(`Guess a number between ${x} and ${y}: `);
  guessedNum = parseInt(guessedNum);
}
console.log("You guessed wrongly");
console.log(`Total marks earned by ${username} is ${marks}`);
