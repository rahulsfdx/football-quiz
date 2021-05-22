var readlineSync = require('readline-sync');
const chalk = require('chalk');

let score = 0;

let questions = [
  {
    question:'Who won Champions League 2020?',
    options:{
      a:'Bayern Munich',
      b:'Barcelona',
      c:'Manchester City'
    },
    answer:'Bayern Munich'
  },
  {
    question:'Which player scored the fastest hat-trick in the Premier League?',
    options:{
      a:'Eden Hazard',
      b:'Aguero',
      c:'Sadio Mane',
      d:'Rooney'
    },
    answer:'Sadio Mane'
  },
  {
    question:'Who won the most Ballon d\'Or in history?',
    options:{
      a:'C. Ronaldo',
      b:'Leo Messi',
      c:'Neymar'
    },
    answer:'Leo Messi'
  },
  {
    question:'Pep Guardiola coaches which team currently',
    options:{
      a:'Chelsea',
      b:'Barcelona',
      c:'Manchester City'
    },
    answer:'Manchester City'
  },
  {
    question:'Finals of Champions Leagus will be played between which teams?',
    options:{
      a:'Barca vs Real Madrid',
      b:'Manchester City vs Chelsea',
      c:'Liverpool vs Juventus',
      d:'Bayern vs Dortmund'
    },
    answer:'Manchester City vs Chelsea'
  }
];

console.log(chalk.yellowBright('Do you know about Football? '));
console.log(chalk.yellowBright('Let\'s check with this small quiz'));
console.log();

function playQuiz(questionObject){
  let optionsArray = Object.values(questionObject.options);
  
  let userAns = readlineSync.keyInSelect(optionsArray, chalk.black.bgWhite.bold(questionObject.question));

  if(optionsArray[userAns] == questionObject.answer){
    console.log(chalk.green('That is correct! '));
    score++;
  } else {
    console.log(chalk.red('That is wrong! '));
    score--;
  }

  console.log(chalk.hex('#DEADED').bold('Your score is : '+score));
  console.log();
}

questions.forEach(function(eachItem){
  playQuiz(eachItem);
})

let finalMsg = score > 0 ? chalk.black.bgGreenBright.bold('Hurray! Your score is '+score) : chalk.white.bgRed.bold('Oops! Your score is '+score);

console.log(finalMsg);