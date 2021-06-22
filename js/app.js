
'use strict';

let q1 = 'Do you live in  Jordan';

let a1 = prompt(q1 + ' Should answer with Yes or No');

switch (a1.toLowerCase()) {
case 'yes':
case 'y':
  console.log('correct ans');
  alert('correct ans ');
  break;

case 'no':
case 'n':
  console.log('uncorrect ans');
  alert('uncorrect anss');
  break;
default:
  console.log('You misspelled it, but it\'s okay');
  alert('You misspelled it, but it\'s okay');
  break;
}




let q2 = 'Are a programer?';

let a2 = prompt(q2 + ' Should answer with Yes or No');

switch (a2.toLowerCase()) {
case 'yes':
case 'y':
  console.log('correct ans');
  alert('correct ans');
  break;

case 'no':
case 'n':
  console.log('uncorrect ans');
  alert('uncorrect ans');
  break;

default:
  console.log('You misspelled it, but it\'s okay');
  alert('You misspelled it, but it\'s okay');
  break;
}



let q3 = 'Are you a TA in ASAC';

let a3 = prompt(q3 + ' Should answer with Yes or No');

switch (a3.toLowerCase()) {
case 'yes':
case 'y':
  console.log('correct ans');
  alert('correct ans');
  break;

case 'no':
case 'n':
  console.log('uncorrect ans');
  alert('uncorrect ans');
  break;
default:
  console.log('You misspelled it, but it\'s okay');
  alert('You misspelled it, but it\'s okay');
  break;
}


let q4 = 'you know what JavaScrypt?';

let a4 = prompt(q4 + ' Should answer with Yes or No');

switch (a4.toLowerCase()) {
case 'yes':
case 'y':
  console.log('correct ans');
  alert('correct ans');
  break;

case 'no':
case 'n':

  console.log('uncorrect ans');
  alert('uncorrect ans');
  break;

default:
  console.log('You misspelled it, but it\'s okay');

  alert('You misspelled it, but it\'s okay');
  break;
}


let q5 = 'You are Graduated from ltuc';

let a5 = prompt(q5 + ' Should answer with Yes or No');
switch (a5.toLowerCase()) {
case 'yes':
case 'y':
  console.log('correct ans');
  alert('correct ans');
  break;
case 'no':
case 'n':
  console.log('uncorrect ans');
  alert('uncorrect ans');
  break;

default:
  console.log('You misspelled it, but it\'s okay');
  alert('You misspelled it, but it\'s okay');
  break;
}
alert ('guessing game: you will guess the Lucky number and it is between 0 -10 and you have 4 chances to guess the number and we will tell you if your guess is too high or too low, yoy are ready' );

let lucky = Math.floor(Math.random() * 11);
let guess = Number (prompt('Guess the number?'));

for (let i=0 ; i<3 ; i++ )
{

  if ((guess < 0) || (guess > 10))
  {
    guess = Number(prompt('your guess is out of the range'));

  }

  if (guess === lucky)
  {
    alert ('Correct answer '+ guess + ' is the correct number');
    break;
  }


  if (Math.abs(lucky-guess) <= 3)
  {

    guess = Number (prompt('Too high'));



  }



  if (Math.abs(lucky-guess) >= 4)
  {

    guess = Number (prompt('Too low'));


  }





  if ( i === 2 && guess === lucky )

  {
    alert ('good luck the correct number is  ' + lucky);


  }


  if (i === 2 && guess !== lucky)
    alert ('Hard luck the correct number is  ' + lucky);

}

alert ('guessing game: you will guess my multiple Luvky number and it is between 0 -10 and you have 6 chances to guess the number and we will tell you if your guess is too high or too low, yoy are ready' );
let poss=[];
let cc;
for (let i=0; i<3 ; i++)
{
  cc= Math.floor(Math.random() * 11);
  poss.push(cc);
}
let guessNum = [];
let score = 0;
let guess2 = Number (prompt('First chance?'));
console.log(guess2);
guessNum.push(guess2);
for (let i=2 ; i<7 ; i++ )
{
  if (guess2 === poss[0] || guess2 === poss[1] || guess2 === poss[2])
  {
    // // alert ('Correct answer '+ guess + ' is the correct number');
    // guess = Number(prompt('Guess the number'));
    // guessNum.push(guess);
    score= score+1;
  }

  if ((guess2 >= 0) || (guess2 <=10))
  {
    guess2 = Number(prompt('Chance Number ' +i ));
    guessNum.push(guess2);
    console.log(guess2);
  }

  if ((guess2 < 0) || (guess2 > 10))
  {
    guess2 = Number(prompt('your guess is out of the range, Chance Number ' +i));
    guessNum.push(guess2);
    console.log(guess2);
  }






}

if (guess2 === poss[0] || guess2 === poss[1] || guess2 === poss[2])
{
  score= score+1;
}


console.log(guessNum);
alert ('your Mark is '+ score +' from 6');
alert ('The correct Numbers ' +poss);



let a = prompt('What is youre Name');
alert('Welcome '+ a+ ', Youer name will finde in the bottom of the page');
document.write('<p style=\'hight: 50px ; background: #3b5998;color: white; \'> ' + a + '</p>');

