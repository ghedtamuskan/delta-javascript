// PART 1
console.log("Hello world");

let a = 60;
let b = 60;
console.log( "sum is : " , a+b);

// PART 2

// Template literals

let c= 15; 

let d = 10 ; 

let output = `the total price is : ${c+d} rupees`


console.log(output);

// conditional statements

let firstName = "muskan";
if (firstName =="muskan"){
    console.log(`Hey welcome ${firstName}`)

}
// else{console.log ("ghedta")}


// TRAFFIC LIGHT SYSTEM

let color= "green";
if(color==="red"){
    console.log("STOP the color is red");

}
else if(color==="yellow"){
    console.log("SLOW DOWN the color is yellow ");
}

 else if(color==="green"){
    console.log("GO the color is green");
}

// else if 
 
let marks = 40;
if (marks >= 80){
    console.log("You got A+ grade");
} 

else if(marks >= 60){
    console.log("You got B+ grade");
}
else if(marks >= 40){
    console.log("You got C grade");
}
else if(marks >= 30){
    console.log("You are FAIL");
}

// else 
 let age = 19;
 if (age>=18){
    console.log("you can vote");
 }
 else {
    console.log("you cannot vote");
 }
//  traffic system in else statement

 let colors= "black";

if(colors==="red"){
    console.log("STOP the color is red");

}
else if(colors==="yellow"){
    console.log("SLOW DOWN the color is yellow ");
}

 else if(colors==="green"){
    console.log("GO the color is green");

 }
 else{console.log("traffic light is broken")}

//  system to calculate popcorn prices

let size = "S";
if (size=="XL"){console.log("Price of popcorn is 250");}
else if (size=="L"){
    console.log("Price of popcorn is 200 ");
}
else if (size=="M"){
    console.log("Price of popcorn is 100 ");
}
else  {
    console.log("Price of popcorn is 50 ");
}
 
// nested if else 

let grade = 34;
if(grade>=35){
    console.log("Pass")
    if( grade>=90){console.log("O Grade")}
    else{console.log("A Grade")}
}
 else  {console.log("Fail")}

//  LOgical operatorts

let num = 45;
 if (num >= 25 && num >= 80){
    console.log("pass");
        console.log("A+")}
        // cant run because one is true and other is false


//  OR operator

        let numb = 45;
if (numb >= 25 ||numb >= 80){
    console.log("pass");
        console.log("A+")}
// run because in OR if any of the condition is true it will execute


// Que -- A "good string" is a string that starts with a letter 'a' &has a length>3.
// Write a program to find if a string is good or not

let goodString = "apple";
if (goodString[0]==="a" && goodString.length>3){
    console.log("good string")
}
else{console.log("bad string")}

// Switch statement

let colour = "green";
switch (colour){
    case "red" :console.log("stop");
    break;
    case "yellow" :console.log("wait");
    break;
    case "green" :console.log("go");
    break;
    default :console.log("broken light");
    break;
}

let day = 5;
switch (day){case 1:
console.log("Monday");
break;
case 2:
    console.log("Tuesday");
    break;
    case 3:
        console.log("Wednesday");
        break;
        case 4:
           console.log("THursday");
            break;
            case 5:
                console.log("Friday");
                break;
                case 6:
                    console.log("Saturday");
                    break;
                    case 7:
                        console.log("Sunday,fun day");
                        break;
                    default:
                        console.log("No day");
                        break;
}

// alerts and prompts
//   alert("something is wrong");
  console.warn("this is a simple log");

//    let fname = prompt("please enter your name");
//    console.log (fname);

//  let fname = prompt ("enter your first name");
//  let lname = prompt ("enter last name");
//  console.log("Welcome" , fname , "" , lname )


// Assignment Questions 

//  Practice Questions
// Qs1. Create a number variable num with some value.
// Now,print“good”if the number is divisible by 10 and print “bad” if it is not
let numbr = 70;
if (numbr % 10==0 ){console.log("good");}
else{console.log("bad");
}

// Que no 2
// let username = prompt("enter your username");
// let userage = prompt("enter your age");
// alert (`${username} is ${userage} years old.`);

// Que no 3
let months = 3;
switch(months){case 1 :
console.log("Months in Quarter 1: January, February, March ")
break;
case 2 :
console.log("Months in Quarter 2: January, February, March ")
break;
case 3 :
console.log("Months in Quarter 3: January, February, March ")
break;
case 4 :
console.log("Months in Quarter 4: January, February, March ")
break;
default: console.log("Not a quarter")
}

// Que no 4

// .A string is a goldenstring if it starts with the character‘A’or‘a’and has a total length greater than 5.
// For a given string print if it is golden or not.


let str = "arsh";
if( (str[0]=== 'a'|| str[0] === 'A') && (str.length >5) ) {
    console.log("golden string");

}
else {
    console.log("bad string")
}
// .Qs5.Write a program to find the largest of 3 numbers.
let x = 5;
let y = 4;
let z = 13;

if(x>y)
{
    if(x>z)
    { console.log(x, "is largest");}
        else{console.log(z, "is largest")}
    }
     else
    {if
        (y>z)
          {console.log(y, "is largest");}
           else{console.log(z, "is largest")}
}

// Qs6(Bonus).Write a program to check if 2 numbers have the same last digit.
// Eg:32 and 47852 have the same last digit

let num1 = 32;
let num2 = 47852;

if((num1%10) ==(num2%10)){
console.log("numbers have the same last digit which is" , num%10);
}
else {console.log("numbers dont have the same last digit")}

// PART 3

// String Method
// trim method
let msg = "       hello   "
console.log(msg.trim());

// indexOf
let mgss = "i love coding";
console.log(mgss.indexOf("e") )
console.log(mgss.indexOf("g") )
console.log(mgss.indexOf("z") )

// method chaining

let chains = "hello its method chaining"
let newChains = chains.trim().toUpperCase();
console.log(newChains)

// slice method

let mesg = "apnacollege"
console.log(mesg.slice(0,4))
console.log(mesg.slice(4))
console.log(mesg.slice(-2));  //11-2 = 9

// replace method
let mssg = "ilovecoding"
console.log(mssg.replace("love" , "do"))
// repeatmethod
let strr = "mango"
console.log(strr.repeat(3))

// practice que
let mesgg = "help!";
console.log(mesgg.trim() .toUpperCase())

let namee = "ApnaCollege"
console.log(namee.slice(4,9))
console.log(namee.indexOf("na"))
console.log(namee.replace("Apna","Our"))

// array

let students = ["muskan" , "karishma" , "ritika"]
console.log(students);

let nums= [2,4,3,8];
console.log (nums)

// array methods
 let cars = ["audi", "bmw","xuv","maruti" ]
 console.log (cars);
 cars.push("toyota")
console.log (cars);

 cars.pop()
 console.log (cars);

 cars.unshift("toyota")
  console.log (cars);

  cars.shift("audi")
  console.log (cars);

  let followers = ["a" , "b" , "c"];
  let blocked = followers.shift()
  console.log (followers)
  console.log (blocked)

  //slice method

  let colours = ["red" , "blue" , "green " , "grey", "black"];
  console.log(colours)

  colours.slice(1);
  console.log (colours.slice(3));


  let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log (fruits.slice(1, 3));
console.log (fruits.slice( -3)); //want three pieces from last

// splice method

 let mon = ["jan" ,"july", "march", "august"]
 console.log(mon.splice(0,2., "july" , "june"))
 console.log(mon)


 //create a nested array to show the following tic-tac-toe

 let game = [["X", null,"O" ],[null, "X","O" ],["O", null,"X" ]]
 console.log(game)
game[0][1]="O"
console.log(game)

//Assignment questions 2

let arr = [7,9,0,-2] 
let n = 3;
let ans =arr.slice(0,n);
console.log(ans)

let ar = [7,9,0,-2] 
let nn = 3
let anss= ar.splice(-nn);
console.log(anss);


let string = ("")
if(string.length == 0){
    console.log("string is blank")

}
else{console.log("string is not empty")};


let strng = "ABJSDJD";
let idx = 3;
if (strng[idx]== strng[idx].toLowerCase()){
    console.log("character is lowecase");

}
else {console.log("character is UPPERCASE")}


// let strg=prompt("please enter a string");
// console.log(`original string=${strg}`);
// console.log(`string without spaces=${strg.trim()}`);

let aray=["hello",'a',23,64,99,-6];
let item= 3;
if(aray.indexOf(item)!=-1)

   { console.log("element exists in array");}
   else{console.log("element doesn't exist in array");}
 
//    PART 4 

//    For Loops

  for(let i=1; i<=5; i++){
      console.log(i);
 }


//  print odd no from 1 to 15
for(let i=1; i<=15; i=i+2){
    console.log(i);
}
console.log ("backwards");

for(let i= 15; i>=1; i=i-2){
    console.log(i);
}

// print all even numbers (2to 10)

for (let i = 2; i<=10; i=i+2){
    console.log(i)
}
 for (let i = 10; i>=2; i=i-2){
    console.log(i)
 }

//  MULTIPLICATION TABLE OF 5

 for (let i = 5; i<=50; i=i+5){
    console.log(i);
 }

//  NESTED FOR LOOP

for(let i=1; i<=3; i++ ){
    console.log(`outer loop ${i}`)
    for(let j = 1; j<=3; j++){
        console.log(j);
    }
}

// While loop 
let i = 5;
while(i<=5){
    console.log(i);
    i++;

}
let j = 5;
while(j>=1){
    console.log(j);
    j--;

}

// break keyword
let k = 1;
while(k<=5){
    if (k ==3){
    break};

    console.log(k);
k++;}

console.log("we used break at 3")


// fav movie code

// const favMOvie = "avatar" //const variable favMovie
// let guess = prompt ("guess  my fav movie"); //we can guess again and again
// while((guess != favMOvie)) {
//     if( guess=="quit")  // if guess is quit then we will get break 
//      {console.log("you quit")
//     break;
// }
// guess = prompt("wrong guess. Please try again"); //if not quit or wrong guess then again guess

// }

// if(guess == favMOvie){ //if we guess write then we will get congrats
//     console.log("Congrats!!")
// }

//loop with arrays

let fruit = ["mango" , "apple" , "banana" , "Litchi" , "orange"];

for (let i = 0; i<fruits.length; i++){
    console.log(i,fruit[i]);
}

//nested loop with nested arrays

let heroes = [ ["ironman" ,"spiderman" , "thor "] ,
 ["superman" , "wonderwomen", "flash"]];

 for (let i= 0; i<heroes.length; i++)
 {console.log(i,heroes[i],heroes[i].length);
    for (let j=0; j<heroes[i].length; j++){
        console.log (`j=${j} ,${ heroes[i][j]}`);
    }
 }


let student = [["aman",95] ,["sharadha",94.3],["karan",78]];

for (let i=0; i<student.length; i++){
console.log (`info of student #${i+1}`)
    for(let j=0; j<student[i].length; j++){
        console.log(student[i][j]);

    }
}

// for of loop 
let fruitss = ["mango","apple","banana" , "letchi", "orange"];

for (fruit of fruitss){
    console.log(fruit);

}
for (j of " apnacollege"){
    console.log(j);
}

// todo app

// let todo = [];

// while (true) {
//     let req = prompt("Please enter your request");

//     if (req === "quit") {
//         console.log("Quitting app");
//         break;
//     }

//     if (req === "list") {
//         console.log("----------");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("----------");
//     } else if (req === "add") {
//         let task = prompt("Please enter the task you want to add");
//         todo.push(task);
//         console.log("Task added");
//     } else if (req === "delete") {
//         let idx = prompt("Please enter the task index");
//         todo.splice(idx, 1);
//         console.log("Task deleted");
//     } else {
//         console.log("wrong request");
//     }
// }

// assignment question 4

let number = [1,2,3,4,5,6,2,3];
let nunm = 2;
for (let i = 0; i<number.length; i++){
    if (number[i]==nunm){
        number.splice(i,1);
    }
}


let nom = [2,8,7,1,5,2]
nom.toString().length;
console.log( `count ${nom.length}`)
  

// PART 5

// js object literal

const studennt = {
    name:"shradha",
    age : 23,
    marks: 90
  };
  console.log(studennt)
// // Thread twitter post

const post = {
    username : "@muskanghedta",
    content : "THis is my first post",
    likes : 150,
    reposts : 5,
    tags : ["@apnacollege" ,"@delta" ]

}
console.log(post)
// // get values

post["likes"]
let prop = "likes"  //to define single variable
post[prop];   //5

//or we can use .method
post.content;


// // Add update value in object literal

const studentt = {
    name:"priyaa",
    age : 23,
    marks : 94,
    city: "delhi"
    
}
console.log(studentt.name);
studentt.name = "shweta"
console.log(studentt.name);

// Object of Objects

const classInfo = {
    aman : {
        grade : "A+",
        city : "delhi"

    },
    amandeep : {
        grade : "B",
        city : "Shimla"

    },
    sneha : {
        grade : "C",
        city : "chennai"

    },

}
console.log(classInfo)

// array of objects
const clasinfo = [
     {   name : "aman",
        grade : "A+",
        city : "delhi"

    },
     {  name: "shradha",
        grade : "B",
        city : "Shimla"

    },
    {    name:"karan",
        grade : "C",
        city : "chennai"

    },

]
console.log(clasinfo)

// Math Object


let step1 = Math.random();
console.log(step1)



let step2 = step1 *10;
console.log(step2)

let step3 = Math.floor(step2)
console.log(step3)

let step4 = step3 + 1 ;
console.log(step4)

// Assisgnment question part 5

let random = Math.floor(Math.random()*6)+1;
console.log (random)


let objj = {
    car:{
        name : "Maruti suzuki" , 
        model :  800,
        color : "white" ,


    }
}
console.log (objj.car.name)

const Person =  {
     Name : "Muskan Ghedta",
               Age : 19,
               City : "Solan"
}
console.log (Person.City = "New york")
console.log ( Person.country ="United States")
console.log(Person)

// GUessing Game

// const max = prompt("Enter the maximum number");
// console.log(max);

// const randomm = Math.floor( Math.random() *max) +1;
//  let guess = prompt ("guess the number");
// //  while loop
//  while (true){
//     if (guess== "quit"){
//         console.log("user quit");
//         break;
// }
//     if (guess== random){
//         console.log(`You are right ! Congratss! Random number was ${random} `);
//         break;
//     }

//     else if (guess<random ){
//      guess = prompt (" Hint : Your guess was too small. PLease try again")
//     }

//     else { guess = prompt(" Hint : Your guess was too large. PLease Try again ")}
//  }

//  Part 6 

// FUNTIONS IN JS 

function hello () {
    console.log ("hello muskan")
}
hello();
 
function print1to5(){
    for (let i=1 ; i<=5; i++){
        console.log(i);
    }

}
print1to5()

function isadult (){
    let age = 8;
    if (age>=18){
        console.log("adult")
    }
    else {console.log("not adult")}

}
isadult()

// create a funtion that prints a poem

function printPoem(){
    console.log("twinkle twinkle ,little star");
    console.log ("how i wonder what you are")
}

printPoem()

// Create a function to roll a dice & always display the value of dice (1 to 6)
function diceRoll(){
    let rend = Math.floor (Math.random()*6)+1;
    console.log( rend);
}
diceRoll()
diceRoll()
diceRoll()
diceRoll()
diceRoll()

// Function with arguments

function arg (name,age){
    console.log (`${name} is ${age} years old`)
}

arg("shradha" , 23);
arg ("muskan ",19)
arg("ritik")
 
// funtion to sum numbers
function sum( a,b){
    console.log (a+b);
}

sum(10, 10)

sum(10, 20)

sum(10, 18)
 
// function to print average of number 

function avg (a,b,c){
    let avg = (a+b+c) / 3;
    console.log (avg)
}
avg(6,5,4)
avg(6,15,4)
avg(6,5,8)

// function to print multiplication table of a number
function table( n) {
    for (let i=n; i<=n*10; i+=n){
        console.log(i);
    }
   
}
table(2)
table(5)
table(12)
table(19)

// Return keyword

function sum( a,b){
   return (a+b);
}
let s = sum (3,4);
console.log(s);
// or we can use simply
// console.log (sum(3,4));

function sum( a,b){
    return (a+b);
 }

 console.log (sum (sum (1,2) , 3 ));  //3 values

 // Create a function that returns the sum of numbers from 1 to n

 function sum (n){
    let sum = 0;
  for (let i = 1; i<=n; i++ ){
    sum += i;
  }
  return sum
 }console.log(sum(10))
 console.log(sum(100))
 console.log(sum(1000))
 console.log(sum(75))

//  create a function that returns the concatenation of all strings in an array

let strg = ["hi" , "hello" , "excuseme", "!"];
function concat(strg){
    let result = "";

    for (let i=0; i<strg.length; i++){
        result += strg [i];
    }

    return result;
}
console.log(concat(strg))

//scope

let summ = 54 ;  //Global scope

function calsum (a,b){
    let summ = a+b;  // Function scope
    console.log (summ);  //3
}

calsum (1,2);
console.log(summ) //54


//Lexical scope 

function outerfunc(){
    let x = 5;
    let y = 6;
    function innerfunc(){
        console.log(x)
        console.log(y)
    }
    innerfunc()
}

// function expression 

let add = function (a,b){
  return (a+b);


}
console.log( add(1,2))

// Higher order Functions 

function multipleGreet (func,count){ //higher  ORDER functioN
    for (let i=1; i<=count; i++){
        func();
    }
} let greet = function (){
    console.log("hello");
}

multipleGreet(greet,20);

//Returns a function
let odd = function (n){
    console.log(!(n%2==0));
}

let even = function(n){
    console.log(n%2==0);
}

function oddOrEvenFactory(request){
    if(request=="odd"){
     return function (n){
            console.log(!(n%2==0));
        }
        return odd;
    } else if (request=="even"){
        return function(n){
            console.log(n%2==0);
        }
        return even;
    }else {
        console.log("wrong request")
    }
}
let request = "odd"
// or we can set it even


// console.log(odd(1), even(5))

//methods 

const calculator = {
    num:55,
    add : function (a,b){
        return a+b;
    },
    sub : function (a,b){
        return a-b;
    },
    multi : function (a,b){
        return a*b;
    }
};

//assisgnment questions Part 6

//Write a javascript function that returns array elemnets larger then a number

let array =[ 7,8,9,1,2,3,4,5,6];
let nomb = 5;

//elements larger then a number num
function getElements(array, nomb){
for ( let i=0; i < array.length; i++){
    if (array[i]>nomb){
    console.log(array[i])
}
}}

getElements (array,nomb);

let strrr = "abcdabcdefgggh";

//function to get string with all unique elements

function getUnique(strrr) {
let ans = "";
for (let i = 0 ; i< strrr.length; i++){
    let currchar =strrr[i];
    if (ans.indexOf(currchar) == -1){ 
         //if current character is not added then add it in ans.
        //otherwise it is duplicate
        ans += currchar;
    }
}
return ans ;
}
getUnique(strrr);


// code to return longest country name as output

 let country = ["australia", "germany", "united states of america"]
 function longestName(country){
    let ansIdx = 0;
    for ( let i = 0; i<country.length; i++){
        let anslen = country [ansIdx].length;
        let currlen = country[i].length;
        if(currlen>anslen){
            ansIdx = i;
        }
        } return country [ansIdx];
 }
 console.log(longestName(country))

//  Write a javascript function to count the number of vowels in a string argument.
 
let strngg = "apnacollege";
function countVowels (strngg){
    let count = 0;
    for (let i = 0; i<strngg.length; i++){
        if (
            str.charAt(i) == "a"||
            str.charAt(i) == "e"||
            str.charAt(i) == "i"||
            str.charAt(i) == "o"||
            str.charAt(i) == "u"
        ){
            count++;
        }
    }
   return count;
}

//JAvascript function to generate a random number within a range (start,end)

let start = 100;
let end = 200;

function generateRandom(start,end){
    let diff = end -start ;
    return Math.floor (Math.random()*diff)+start;
}

console.log(generateRandom(start,end));

// PArt 7
// this keyword
 const child = {
    name:"muskan",
    age :19,
    eng :97,
    math:78,
    phy:86,
    getAvg(){
        let avg= (this.eng + this.math + this.phy) / 3;
        console.log(avg);
    }
}
    console.log(child.getAvg());

    // try and catch statements 
try{  
    console.log(zjn);
}catch {
    console.log("caught an error...a is not defined")
}

// Arrow functions  ..equal to and greater than

const sumb= (a,b) =>{
    console.log(a+b);
}
console.log(sumb(5,5))

const cube =(n)=> {
    return n*n*n;
}
console.log(cube(2))

const power = (a,b)=>{
    return a**b ; //a to the power b 
}
console.log(power(2,4)) //4 times 2

// implicit return in arrow functions  ...more short

const mul = (a,b)=>(a*b);
console.log(mul(6,7))

// SET timeout

// console.log("hii there")
// setTimeout(()=> {
//     console.log("apna college");
// }, 1000);
// console.log("welcome to")
//  //SetInterval

// console.log("hii there")
// let id=setInterval(()=> {
//     console.log("apna college");
// }, 1000);
// console.log("welcome to")

// clearInterval(id)

// this in arrow functions 
// const childrn = {
//    name:"muskan",
//    age :19,
//    marks :97,

//    prop : this,  //global scope
//    getName :function (){
//       console.log(this)
//       return this.name;},

//  getMarks : () =>{
//    console.log(this)   //parents scope
//       return this.age;},

// getInfo1: function(){
//    setTimeout(() => {
//       console.log(this)  //student
//    }, 2000)
// },

// getInfo2: function(){
//    setTimeout( function() {
//       console.log(this)  //window
//    }, 2000)
// }

// };

// console.log(childrn.getName() , childrn.getMarks())

// console.log(childrn.getInfo1 (), childrn.getInfo2())

// practice questions 
// Write an  arrow function that returns the square of a number "n"
const square = n => (n*n);
console.log(square(4))

// write a function that prints "hello world" 5 times at intervals of 2s each

//  let idd= setInterval(() =>{
//    console.log("Hello moto!");
//  },2000);

//  setTimeout (()=>{
//    clearInterval(idd),
//    console.log("clear interval ran")},
//  10000);

// Assisgnment questions part 5

const arrayAverage =(arayy) =>{
   let total = 0;
   for (let number of arayy){
      total+=number;
   }
   return total / arr.length;
};

let arayy = [1,2,3,4,5,6,7,8,10];
console.log(arrayAverage(arayy));

let numbrr = 4;
const isEven = (numbrr) => numbrr %2==0;

// Part 8 

// more array methods
// forEach method

let arey = [1,2,3,4,5];

function print (el){
   console.log(el);
}

arey.forEach(print);

// Or we can also do like that
// arey.forEach(function(el){
//    console.log(el);
// });

let areey = [{
   name:"musu",
   marks:98
},{
   name:"muski",
   marks:76 
},{
   name:"muskan",
   marks:99
}
]


areey.forEach((student)=>{
   console.log(student.marks)
})

let gpa = areey.map((el)=>{  // gpa for areey that are students
   return el.marks/10;
})
console.log(gpa)

// Map function

let nuum = [1,2,3,4,]
let double =nuum.map((el)=>{
   return el*2;
});

console.log(double)

// filter
 let nuums = [1,2,3,4,7,6,8,10,11,12];
 let eveen = nuums.filter((el)=>{
   return el %2==0;  //even true , odd--false
 })
 console.log(eveen)

//  Every

let aru = [2,4,6,1]
 let evven = aru.every((el)=> el%2==0);
console.log(evven)
//some
let aaru = [2,4,6,1]
 let eeven = aaru.every((el)=> el%2==0);
console.log(eeven)

// reduce
let nomber = [1,2,3,4,5,6,6,7]
let finalVal = nomber.reduce((res,el)=> res+ el);
console.log(finalVal)

// return the maximun no.in array
let arry=[1,2,3,4,5,7,6,45]
let max = arry.reduce ((max,el)=>{
    if (max<el){    //comparing maximum one by one
        return el;
}else {
    return max;
}
});
console.log (max)

// check if all numbers in our array are multiples of 10 or not

let noms = [10,20,30,40];
let ansss = noms.every((el)=> el%10==0);
console.log(ansss);

//return the minimum no. in array

function getMin(arrya){

let min = arrya.reduce ((min,el)=>{
    if (min<el){    //comparing minimum one by one
        return min;
}else {
    return el;
}
});

return min;
}
let arrya=[-1,1,0,-2,2,3,4,5,7,6,45]
console.log(getMin(arrya))


//default parameters
 function som (a=7,b){
    return a + b ;
 }

 console.log(som(5))

 //spread
 let are =[1,3,4,5,6]  //im array
 console.log(...are)

 let ap= ("apna college")
 console.log(...ap)
  
 //spread with array literals

 let aree =[3,4,5,6,4]  //im array => value
 let newAree = [...aree]  //we can also store this in new array and do changes in it
 console.log(...newAree)

 let oddd  = [1,3,5,7,9]    
 let evenn = [2,4,6,8,10]

 let oddeven = [ ...evenn, ...oddd];  //sytematic order is important  which comes first 
 console.log (oddeven)

 //spread with object literals

 let data = {
    email : "muskanghedta@gmail.com",   // in object we need both key :value
    password : "abcd"
 };

 const dataCopy = {...data ,id:123 , country: "india" } //we can also add new property i.e key value pair 
 console.log(dataCopy)

 //rest

 function sum (...args){  // arguments
    for (let i = 0; i <args.length; i++){
        console.log("you gave us:" , args[i])   //args of i
    }
    }
 console.log(sum(1,2,3,4,5)) //sum is collecting all arguments and storing it in single argument called args .
 //inbuit Arguments
function min(){
console.log(arguments)
}
console.log( min(1,2,3,4));  //collection

function sum(...args){
    return args.reduce((sum,el)=> sum+el);
}
console.log(sum(1,3,2,4-5))


function min(...args){
    return args.reduce((min,el)=>{
        if (min>el){
            return el;
        }
        else return min;
    })
}
console.log(min(5,4,7,8,14,56,45,2))

//Destructuring
 let names = ["tony","musku","kashish","shivani","muskan"]
//  let winner = names[0];
//  let runnerup = names[1];
//  let secondRunnerup= names[2]

//short method using destructuring
let [winner,runnerUp,secondRunnerup, ...others]=names;   //by using ... rest method we store rest of the names that left
console.log(winner)
console.log(secondRunnerup)
console.log(others)

//destructring objects
 
const studdent = { 
    name :"karan",
    age :18,
    username: "karan@gmail.com",
    password :" karan123",
};
let {username, password :secret,city="mumbai"}= studdent;
console.log(username,secret,city)

// Assignments Questions Part 8

//Square and sum the array elements using the arrow function and then find the average of the array
let numbrrr = [1,2,3,4,5]
const squaree = numbrrr.map((num)=>num*num);
console.log(squaree)
let suum = squaree.reduce((acc,cur)=>acc+cur)

let avrage = suum/numbrrr.length;
console.log(avrage)

//Create a new array using the map function whose each element is equal to the original element plus 5

let ary = [1,2,3,4,5]
const newAry = (ary.map((num)=>num+5));

console.log(newAry)

// Create a new array whose elements are in uppercase of words present in the original array

let ariy = ["apna college"]
const newAriy = ariy.map((text)=>text.toUpperCase())
console.log(newAriy)

//Qs4.Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
// The function should return a newarray with the original array values and all of  the additional arguments doubled.
const doubleAndReturnArggvs=(arr,...args)=>[...arr,
    ...args.map((v)=>v*2),];

   console.log( doubleAndReturnArgs([1,2,3],4,4));//[1,2,3,8,8]

   console.log( doubleAndReturnArgs([2],10,4));//[2,20,8]


// Qs5.Write a function called merge Objects that accepts two objects and returns a new object which contains all the keys and values ofthe first object and second object.
const obj1={a:1,b:2}
const obj2={c:3,d:4};

const mergeObjects = (obj1,obj2)=>({...obj1,...obj2});

console.log(mergeObjects)
//{a:1,b:2,c:3,d:4}








 
 







 









 


































 





















































































