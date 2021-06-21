
'use strict';

let q1 = 'Do you live in  Jordan';

let a1 = prompt(q1 + ' Should answer with Yes or No');

switch (a1.toLowerCase()) {
case 'yes':
  console.log('correct ans');
  alert('correct ans ');
  break;

case 'no':
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
  console.log('correct ans');
  alert('correct ans');
  break;

case 'no':
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
  console.log('correct ans');
  alert('correct ans');
  break;

case 'no':
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
  console.log('correct ans');
  alert('correct ans');
  break;

case 'no':
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
  console.log('correct ans');
  alert('correct ans');
  break;
case 'no':
  console.log('uncorrect ans');
  alert('uncorrect ans');
  break;

default:
  console.log('You misspelled it, but it\'s okay');
  alert('You misspelled it, but it\'s okay');
  break;
}



let a = prompt('What is youre Name');
alert('Welcome '+ a+ ', Youer name will finde in the bottom of the page');
document.write('<p style=\'hight: 50px ; background: #3b5998;color: white; \'> ' + a + '</p>');

