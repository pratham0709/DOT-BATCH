// adding para
// const t1 = performance.now();
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log('This took ' + (t2 - t1) + ' ms');

// // optimizing a bit
// const t3 = performance.now();

// let myDiv = document.createElement('div');

// for(let i =1; i<=100; i++){
//     let Element = document.createElement('p');
//     Element.textContent = 'Thise is Para' + i;

//     myDiv.appendChild(Element);
// }
// document.body.appendChild(myDiv);

// const t4 = performance.now();
// console.log('This took ' + (t4 - t3) + " ms");

let fragement = document.createDocumentFragment();

for(let i=1; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para' + i;

    fragement.appendChild(newElement);
}
document.body.appendChild(fragement); // 1 Reflow && 1 Repaint