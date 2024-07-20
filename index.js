// 1. ways to print in javascript
// console.log("Hello");
// alert("me"):
// document.write("This is document write")

// 2 javascript console api
// // 
// console.log("Hello World");
// console.warn("THis is warning");
// console.error("This is an error");

// 3. Javascript Variables
//   variables are containers which stored data values
var number1=34;
var number2=45;
var char1='abc';
// console.log(number1+number2);
// console.log(number2+char1);


//  4 Datatypes of Java script
//  number
// string
// objects
var age={abhi:26,peter:40,Prashant:39}
// console.log(age)
// booleans
vara=true
varb=false
// console.log(vara,varb)

//  undefined
var und="undefined"
var und1;                 // if not assigned any value to a varialble its undefined
// console.log(und)
// console.log(und1)

/*
 Primitive Data type     undefined,null,number,string,boolean,symbol
 Reference data type     Arrays, Objects

*/
var arr=[1,2,3,4,5]
// console.log(arr)
// console.log(arr[2])

// Operators
// Arithmatic Operators    (+,-,*,/)

var a=34;
var b=45;
// console.log("The value of a + b is", a+b);

// Assignment Operators   Assign a value to other variable
var v=b;
v -=2    // c=c-2
// console.log(v)

// comparison Operators    true,false
// console.log(a==b)
// console.log(a>=b)
// console.log(a<b)
// console.log(a>b)
// console.log(a>=b)

// logical operators   &&,||,!

// operator which applied on opearands

function avg(a,b){
    return (a+b)/2;
}
c=avg(3,5);
// console.log(c);
//  Dry Principal : Do not repeat yourself
//  crome console blue = number, black =string

// Conditions

var age=34;
// if(age>12){
//     console.log("You are not kid")
// }
// else{
//     console.log("You are a kid")
// }

// if-else ladder

// if(age>12){
//     console.log("You are not kid")
// }
// else if(age>8){
//     console.log("You are a kid")
// }
// else {
//     console.log("You are a child")
// }



//  Loop
// var arr=[1,3,4,'asdf',4,3];
// console.log(arr); 
// for (i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// for each loop
// arr.forEach(function(element){
// console.log(element)})

// var ab=0;
// const ab=0;  //   This is used when possibly no change in future, increment does not work with this
// console.log(j);

// while loop
// while(ab<arr.length){
//     console.log(arr[ab]);
//     ab++;
// }
// console.log('abhi');
// console.log(ab);
// let gh=9;
// console.log(gh);

// break 

for (i=0;i<arr.length;i++){
    if(i==2){
        break;                        // break the loop
    }
    // console.log(arr[i])
}

// continue

for (i=0;i<arr.length;i++){
    if(i==2){
        continue;                       // cancel this iteration and move to next iteration
    }
    console.log(arr[i])
}

// array methods
let me=['Abhi','Pandey',26,'IT','Diploma','12th','10th'];
me.pop();    // to delete a element from last
console.log(me);
me.push('HighSchool');       // to add a element in array at last

console.log(me);

me.shift();  
console.log(me.shift());               // remove first element
console.log(me);
me.unshift('Rahul');             //                   // add element at first place  , this return length of array
console.log(me);
console.log(me.unshift('Rahul'));

