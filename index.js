var readlineSync = require('readline-sync')
var chalk = require('chalk')
var score = 0 


// taking Input
var userName = readlineSync.question("Hey! please enter your name : ")
console.log(chalk.blueBright("welcome "+ userName ))
console.log(chalk.yellowBright.bold("-------------------"))


// function to check userAnswer is RIGHT or WRONG
function play(question , answer){
  var userAnswer = readlineSync.question(question)

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green.bold("RIGHT"))
    score = score + 1
  }
  else{
    console.log(chalk.red.bold("WRONG"))
  }
  console.log("Current score is : " , score)
  console.log(chalk.yellowBright.bold("-------------"))
}


//array of highScore
var highScore = [
  {
    name : "bisht",
    score : 4
  },
  {
    name : "pandey",
    score : 3
  },
  {
    name : "joshi",
    score : 2
  }
]


// creating array of object {question /  answer}
var quesAnsArray = [
  {
    question : "Where do I live ",
    answer : "India"
  },
  {
    question : "have you got the placement ",
    answer : "no"
  },
  {
    question : "which is my fav bike ",
    answer : "bullet"
  },
  {
    question : "tell my fav place ",
    answer : "Banglore"
  }
]


// calling function
for(var i=0 ; i<quesAnsArray.length ;i++){
  current = quesAnsArray[i]
  play(current.question, current.answer)
}


// disply the registered highScore
for(var i =0 ;i<highScore.length;i++)
{
  var current = highScore[i]
  console.log("The " +(i+1) + " HighScore is : "+ current.score)
}

console.log(chalk.yellowBright.bold("-------------------"))
// final score 
console.log(chalk.yellow.bold("your final Score is : ", score))


// beaten the highScore or not
for(var i =0 ; i<highScore.length ;i++){
  var currentObj = highScore[i]
  if(score>currentObj.score)
  {
    console.log(chalk.yellowBright.bold("-------------------"))
    console.log(chalk.green.bold("Hey u have beaten " + (i+1) + " HighScore . Kindly share screenshot of score . "))
  }
}

