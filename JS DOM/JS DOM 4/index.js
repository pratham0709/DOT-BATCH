

// let meraPromise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am Resolved Promise 1');
//     }, 5000);
//     resolve(40021666449948);
//     // reject(new Error('Errors aaye hai'));
// });

// meraPromise1.then((value) => { console.log(value)});
// meraPromise1.catch((value) => {console.log("Received an Error")}); 
// // let meraPromise2 = new Promise(function(resolve, reject) {
// //     setTimeout(function() {
// //         console.log('I am Resolved Promise 2');
// //     }, 3000);
// //     // resolve(4002);
// //     // reject(new Error('Errors aaye hai'));
// // });

// console.log('Pehla');

// let waada1 = new Promise( function(resolve, reject) {
//    setTimeout(() =>{
//     console.log("waada 1 is started");
//    }, 2000);
//    resolve(true);
// });
// let output = waada1.then(() => {
//    let waada2 = new Promise((resolve, reject) =>{
//     setTimeout(()=> {
//         console.log("waada 2 is started");
//     }, 3000);
//     resolve('waada 1 resolved');
//    });
//    return waada2;
// });

// output.then((value) => console.log(value));



// let pratham = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         console.log('Pratham is running');
//     }, 4000);
//     resolve(true);
// });

// let output = pratham.then(() => {
//     let mahi = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('mahii  is running');
//         }, 5000);
//         resolve('mahi is win');
//     })
//     return mahi;
// })

// output.then((value) => console.log(value));

// async function abcd(){
//     return "pratham";
// }

// abcd();

// async function utility() { 

//     let delMausam = new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             resolve('Delhi Mai Bohat Thand Hai');
//         }, 5000);
//     });

//     let hydMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Hydrabad Mai bohat Garmi Hai');
//         }, 6000);
//     });

//     let DM = delMausam;
//     let HM = hydMausam;

//     return [DM, HM];
// }



// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);
// }
// utility();


// async function helper() {
//     let option = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Pratham',
//           body: 'slim',
//           userId: 2002,
//           weight:40,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       };
    
//       let content = await fetch('https://jsonplaceholder.typicode.com/posts', option);
//       let responce = content.json();
//       return responce;
// }
 
// async function utility() {
//     let ans = await helper();
//     console.log(ans);
// }

// utility();

// let --> Block ScopeS
// function icon() {
//   let name = "Mozilla";
//   function abc() {
//     console.log(name);
//   }
//   abc();
// }

// icon();


function dada() {
  let name = "Pratham";
  function bhau() {
    console.log(name);
  }
  return bhau;
}

let didi = dada();
didi();