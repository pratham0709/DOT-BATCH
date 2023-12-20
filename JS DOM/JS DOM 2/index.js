
// function eventFunction(){
//     console.log('I Have Clicked On Listner');
// }

// document.addEventListener('click', eventFunction);


// const constant = document.querySelector('#wrapper');

// constant.addEventListener('click', function(pratham){
//     console.log(pratham);
// });

// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('cilck', function(event) {
//     event.preventDefault();
//     console.log('Hello maza aaya');
// });

// let myDiv = document.createElement('Div');

// function parastatus(event) {
//     console.log('Para ' + event.target.textContent);
// }

// myDiv.addEventListener('click', parastatus);
// for(let i =1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' +  i;

    
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

let element = document.querySelector('#wrapper');
element.addEventListener('click', function(event) {
    if(event.target.nodeName === 'SPAN') {
        console.log('span pr click kia hai ' + event.target.textContent); 
    }
   
});