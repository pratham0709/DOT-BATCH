const countValue = document.querySelector('#counter');

function increment() {
    // get the value From UI
    let value = parseInt(countValue.innerText);
    // increment the value
    value = value + 1;
    // set the value onto the UI
    countValue.innerText = value; 
};

function decrement()  {
    // get the value From UI
    let value = parseInt(countValue.innerText);
    // decrement the value
    value = value - 1;
    // set the value onto the UI
    countValue.innerText = value;
};