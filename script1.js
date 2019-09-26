/*
 * Multiple line comment
 * Variable and data types
 */

// Single Line Comment
/*
var firstName = "John"; //Camel case
console.log(firstName);

var lastName = "Doe";
console.log(lastName);

var age = 22;
console.log(age);

var isMarried = true;
console.log(isMarried);

var status3;
console.log(status3);
*/


/*
 * Variable mutation 
 * and type coersion 
 */

// //Type Coersion
// var firstName = 'John';
// var age = 28;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old' +
//         ' is he married? ' + isMarried);

// // Varible mutation
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' +
//             'is he married? ' + isMarried);

// var lastName = prompt('What is his last name? ');
// console.log(firstName + ' ' + lastName);


/*
 * Basic Operators
 */

// var now, ageJohn, ageMark, yearJohn, yearMark;

// now = 2019;
// ageJohn = 28;
// ageMark = 33;
// //Math operator
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn, yearMark);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // //Relational operator
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// //typeof operator
// console.log(typeof johnOlder);
// console.log(typeof now);
// console.log(typeof 'John and Mark');
// var x;
// console.log(typeof x);


/* 
 * Operator Precedence
 */

// var now = 2019;
// var yearJohn = 1989;
// var fullAge = 17;

// // //Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// // //Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;

// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// var x, y;
// x = y = (3 + 5 + 2) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x,y);

// //More operator
// x = x * 2;
// x *= 2;

// x = x + 2;
// x += 2;

// x = x + 1;
// x += 1;
// x++;

//Tugas #1

/*
    Mark and John are trying to compare their 
    BMI (Body Mass Index), which is calculated 
    using the formula:

    BMI = mass / (height*height)
    (mass in kg and height in meter).

    1. Store Mark's and John's mass and height in
    variables
    2. Calcuate both their BMI's
    3. Create a boolean variable containing information
    about whether Mark has a higher BMI than John
    4. Print a string to the console containing
    the variable from step 3. Something like
    ("Is Mark's BMI higher than John's? true")
*/

/*********************
/* 
* If / Else Statements
*/

// var firstName = 'John';
// var status = 'married';

// if(status === 'married'){
//     console.log(firstName + ' is married');
// }else{
//     console.log(firstName + ' will hopefully marry soon');
// }

// var isMarried = false;

// if(isMarried){
//     console.log(firstName + ' is married');
// }else{
//     console.log(firstName + ' will hopefully marry soon');
// }

/*********************
/* 
* Boolean Logic (AND, OR, NOT)
*/

// var firstName = 'John';
// var age = 13;

// if(age < 13){
//     console.log(firstName + ' is a boy');
// } else if(age >= 13 && age < 20){ //age >= 13 AND age < 20
//     console.log(firstName + ' is a teenager');
// } else if(age >= 20 && age < 30){
//     console.log(firstName + ' is a young man');
// } else{
//     console.log(firstName + ' is a man');
// }

/*********************
/* 
* The Ternary Operator and Switch statement
*/

// var firstName = 'John';
// var age = 9;

// //Ternary Operator
// age >= 10 ? console.log(firstName + ' drinks juice') 
// : console.log(firstName + ' drinks milk');

// if(age >= 10){
//     console.log(firstName + ' drinks juice');
// }else {
//     console.log(firstName + ' drinks milk');
// }

// var drink = age >= 10 ? 'juice' : 'milk';
// console.log(drink);

// // //Switch statement
// var job = 'instructor';

// switch(job){
//     case 'instructor':
//     case 'teacher':
//         console.log(firstName + ' is a teacher and instructor');
//         break;
//     case 'driver':
//         console.log(firstName + ' is a driver');
//         break;
//     case 'designer':
//         console.log(firstName + ' is a designer');
//         break;
//     default:
//         console.log(firstName + ' does something else');
// }

// age = 50;
// switch(true){
//     case age < 13:
//         console.log(firstName + ' is a boy');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man');
//         break;
//     default:
//         console.log(firstName + ' is a man');
// }

/***************
 * Truthy and Falsy Values
 */

//Falsy values : undefined, null, 0, '', NaN
//Truthty values : NOT falsy values


// var height = '';

// if(height || height === 0 || height === ''){
//     console.log('Variable is defined');
// }else{
//     console.log('Variable is not defined');
// }

// var scoreJohn = (189 + 120 + 103) / 3;
// var scoreMike = (129 + 94 + 123) / 3;
// var scoreMarry = (97 + 134 + 105) / 3;

// console.log(scoreJohn, scoreMike, scoreMarry);

// if(scoreJohn > scoreMike){
//     console.log('John\'s team win with score ' + scoreJohn);
// }else if(scoreMike > scoreJohn){
//     console.log('Mike\'s team win with score ' + scoreMike);
// }else{
//     console.log('There is a draw');
// }

// if(scoreJohn > scoreMike && scoreJohn > scoreMarry){
//     console.log('John\'s team win with score ' + scoreJohn);
// }else if (scoreMike > scoreJohn && scoreMike > scoreMarry){
//     console.log('Mike\'s team win with score ' + scoreMike);
// }else if(scoreMarry > scoreJohn && scoreMarry > scoreMike){
//     console.log('Marry\'s team win with score ' + scoreMarry);
// }else{
//     console.log('There is a draw');
// }

/* ****************
    Functions 
*/
// DRY (Don't Repeat Yourself)

// function calculateAge(birthYear){
//     return 2019 - birthYear;
// }

// var ageJohn = calculateAge(1997);
// var ageMark = calculateAge(1960);
// var ageMike = calculateAge(1971);
// console.log(ageJohn, ageMark, ageMike);

// function yearUntilRetirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 60 - age;

//     if(retirement > 0){
//         console.log(firstName + ' retires in '+ retirement + ' years');
//     } else {
//         console.log(firstName + ' is already retired.');
//     }
// }

// yearUntilRetirement(1987, 'John');
// yearUntilRetirement(1946, 'Mark');
// yearUntilRetirement(1971, 'Jane');

/* 
    Function Statements and Expressions
*/

//function declaration
//function whatDoYouDo(job, firstName){}

//function expression
// var whatDoYouDo = function(job, firstName){
//     switch(job){
//         case 'teacher':
//             return firstName + ' is a teacher';
//         case 'driver':
//             return firstName + ' is a driver';
//         case 'designer':
//             return firstName + ' is a designer';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Mark'));
// console.log(whatDoYouDo('retired', 'Mike'));

/*
    Array
*/

//Initialize Array
///var names = ['John', 'Mark', 'Jane'];
//var years = new Array(1990, 1969, 1948);

//console.log(names[0]);
//console.log(names.length);

// //Mutate Array Data
// names[0] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// // //Different Data Types
// var john = ['John', 'Smith', 1990, 'designer', false];
// john.push('blue');
// john.unshift('Mr');
// console.log(john);

// john.pop();
// john.pop();
// john.shift();
// console.log(john);


// function tipcalculator(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else
//     if (bill => 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }
// var bill = [124, 48, 268];
// var tips = [tipcalculator(bill[0])],
//     [tipcalculator(bill[1])], [tipcalculator(bill[2])];

// var finalAmounts = [bill[0] + tips[0]],
//     [bill[1] + tips[1]]
//     [bill[2] + tips[2]]
// console.log(bills, tips, finalAmounts);