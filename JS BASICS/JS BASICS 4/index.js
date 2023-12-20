// // console.log('kya haal');

// // function Declaration
// function running(){
//     console.log('run');
// }

// // call or invoke function
// running();

// //Named function assignments
// let stand = function walk(){
//     console.log('walking')
// }

// //Annonemous function assignments
// let stand2 = function(){
//     console.log('walking')
// }

// stand();
// let jump = stand;
// jump();
// stand2();

// let x = 1;
// x = 'a';
// console.log(x);

// function sum() {
//     let total = 0;
//     for(let value of arguments)
//         total = total + value;
//     return total;
// }

// // console.log(sum(1,2));
// // console.log(sum(1));
// // console.log(sum());
// // console.log(sum(1,2,3,5,6));

// let ans = sum(1,2,3,4,5,6);
// console.log(ans);

// Rest Operator
// function sum(...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6);

// function sum2(num, value, ...args){
//     console.log(args);
// }
// sum2(1,2,3,4,5,6);

// Default Parameter

// function interest(p,q=6,r=10){
//     return p*q*r /100;
// }

// console.log(interest(1000,8));

// let person = {
//     fName : 'Pratham',
//     lName : 'Jadhav',

//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     }, 
//     set fullName(value){
//         if(typeof value!== 'string'){
//             throw new Error('You Have Not sent a string');
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     } 
// };
// console.log(person.fullName);

// person.fullName = 'Ms Dhoni';
// console.log(person.fullName);

// try{
//     person.fullName = "pratham";
// }
// catch (e){
//     alert(e);
// }


// {
//     let a = 5;
    
// }
// console.log(a);
// Reducing an array 

let arr = [1,2,3,4];

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log("Printing the Sum");
console.log(totalSum);