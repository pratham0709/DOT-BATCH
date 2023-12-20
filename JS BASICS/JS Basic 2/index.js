console.log("Chaliye Shuru Karte Hai!!")

// Object

// let rectangle = {
//     length : 1,
//     breadth : 2,

//     draw: function() {
//         console.log("drawing the rectangle");
//     }

// };

// Factory Function

// function createRectangle(len, bre){
//     return rectangle = {
//         length : len,
//         breadth : bre,
    
//         draw() {
//             console.log("drawing the rectangle");
//         }
    
//     };
// }

// let rectangleObj = createRectangle(5,4);
// let rectangle1 = createRectangle(3,5);
// let rectangle2 = createRectangle(7,8);

// Constructor function --> pascal notation --> First letter of every word is capital --> NumberOfStudents.

function Rectangle(len, bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function() {
        console.log("drawing");
    }
};

let rectangleObj = new Rectangle(1,6);

// rectangleObj.color = 'Yellow';
// console.log(rectangleObj);

// delete rectangleObj.color;
// console.log(rectangleObj);

// rectangle.length;
// rectangle.breadth;
// rectangle.draw();

// let a = 10;
// let b = a;

// a++;
 
// console.log(a);
// console.log(b);

let a = {value : 10};
let b = a;
a.value++;

console.log(a.value);
console.log(b.value);

// let rectangle1 = {
//     length : 1,
//     breadth : 2,

//     draw: function() {
//         console.log("drawing the rectangle");
//     }

// };

// let rectangle2 = {
//     length : 1,
//     breadth : 2,

//     draw: function() {
//         console.log("drawing the rectangle");
//     }

// };

let rectangle = {
    length : 1,
    breadth : 2
};


// for-in
// for(let key in rectangle){
//     console.log(key,rectangle[key]);
// }

// for - of 
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// if('length' in rectangle){
//     console.log('Present');
// }
// else{
//     console.group('Absent');
// }

// Object Cloning - #clone1
// let src = {
//     a : 10,
//     b : 12,
//     c : 14
// };

// let dest = {};
// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);
// src.a++;
// console.log(dest);

// Object Cloning - #clone2
// let src = {
//     a : 10,
//     b : 12,
//     c : 14
// };

// let src2 = {value:25};
// let dest = Object.assign ({}, src, src2);
// console.log(dest);
// src.a++;
// console.log(dest);

// Object Cloning - #clone3

let src = {
    a : 10,
    b : 12,
    c : 14
};

let dest = {...src};
console.log(dest);
src.a++;
console.log(dest);
