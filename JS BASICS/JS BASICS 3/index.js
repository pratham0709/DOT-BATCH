// console.log('hello ji');

// let str1 = 'Pratham';

// let LastName = new String('Babbar');

// let message = 
// `Hello ${str1},
// Thise is 
// my First 
// message`;
// // let words = message.split(' ');
// // console.log(words);
// console.log(message);

// let date = new Date();
// console.log(date);
// let date2 = new Date('June 20 1998');
// console.log(date2);

// let date3 = new Date(2002, 8, 7, 9);
// // console.log(date3);

// date3.setHours(13);
// console.log(date3);


// let number = [1,'pratham', 2,4,false, 5];
// console.log(number);

// end --> push()
// Begin --> unshift()
// middle -- > splice()

// Searching 

// console.log(number);
// console.log(number.indexOf(4));

// we want to check if number exist in array or not 
// if(number.indexOf(2) != -1)  Bad method
//     console.log("present");

// console.log(number.includes(4));

// console.log(number.indexOf(4,2));


// let courses = [
//     {no:1 , naam:'Pratham'},
//     {no:2 , naam:'dada'}
// ];

// console.log(courses);

// let course = courses.find(function(course){
//     return course.naam === 'kilvish';
// })

// console.log(course);
// Or 2nd method Arrow Function

// let course2 = courses.find(course2 => course2.naam === 'Pratham');
// console.log(course2);

// let numbers = [1,2,3,45,5,7,9,8,10];
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// numbers.splice(1, 4);
// console.log(numbers);

// Empty an array
// let num1 = [1,4,5,6];
// let num2 = num1;
// // thise is not good way to empty elements
// // num1 = [];
// // thise is one way to empty elements and thise way is widly used to empty an elements
// // num1.length = 0;

// // Second way to empty an elements
// num1.splice(0, num1.length);
// console.log(num1);
// console.log(num2);

// Combine An array
// let num1 = [1,2,3];
// let num2 = [4,5,6];

// let combine = num1.concat(num2);
// console.log(combine);

// let sliced = combine.slice(2,3);
// console.log(sliced);

// let number = [10,20,30,40,50,60,70,80];
// let sliced1 = number.slice(2,6);
// console.log(sliced1);

// let sliced2 = number.slice(2);
// console.log(sliced2);

// let sliced3 = number.slice();
// console.log(sliced3);

// spread operator
// let num1 = [1,2,3];
// let num2 = [4,5,6];

// let combined = [...num1,'a', true, ...num2, 'b', false];
// console.log(combined);

// // copy kaise Create kru ?
// let another = [...combined];
// console.log(another);

// Iterating or Traversing an array

// let arr = [10,20,30,40,50,60,70,80,90,100];
// // for(let value of arr){
// //     console.log(value);
// // }

// // for - each loop

// arr.forEach(number => console.log(number));

// Join  Arrays

// let num1 = [1,2,3,4,5,6,7,8];
// let joined = num1.join(',');
// console.log(joined);

// Spliting an array
// let mess = 'Thise is my first message';
// let parts = mess.split(' ');
// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);

// // sorting 
// let num = [10,4,40,5];

// num.sort();
// console.log(num);
// num.reverse();
// console.log(num);

// filtered Arrays
// let num = [1,2,-1,-2];
// let filtered =  num.filter(value => value < 0);

//  console.log(filtered);

// mapping an array

// let numbers = [4,5,6,7,8,9];
// let items = numbers.map(value =>'Student_no' + value);
// console.log(items);

// let num1 = [4,5,-4,-2,-3];
// let filtered =  num1.filter(value => value >= 0);

// let dada = filtered.map(function(num){
//     return {value:num}
// });
// console.log(dada);

//chaining
let number = [4,5,-4,-2,-3];
let bhau = number
            .filter(value => value >= 0)
            .map(num => {value: num});
console.log(bhau);