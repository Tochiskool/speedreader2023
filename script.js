

var inputPoem = prompt("Please write a poem for me");
var howFast = prompt("How fast can you read a per minute, 1000 milliseconds equals a second.");

var inputPoemIntoArray = inputPoem.split(" ");
console.log(inputPoemIntoArray, howFast);

var i = 0, timeInterval, clock = 5;

var containerEl = document.querySelector('.container');
var welcomeEl = document.querySelector('.welcome');
var mainEl = document.querySelector('#countdown');
var countDownEl = document.querySelector('#main');

function startGame() {
    timeInterval = setInterval(function () {
        clock--;
        mainEl.textContent = `Game starts in ${clock}`;
        if (clock === 0) {
            clearInterval(timeInterval);
            mainEl.textContent = ' ';
            speedTest()
        }
     }, 1000);//time here is every 1 second for game to start
}

function speedTest() {
   
    var poemTimer = setInterval(function () {
        if (inputPoemIntoArray[i] === undefined) {
            clearInterval(poemTimer)
        } else {
            countDownEl.textContent = inputPoemIntoArray[i];
            i++;
        }
    },howFast)
}

startGame()