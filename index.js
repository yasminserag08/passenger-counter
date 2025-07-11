// initialise the count as 0
let count = 0;

// increment the count variable when the increment button is clicked
function increment() {
    count++;
    // change the count element in the DOM to match the count variable
    document.getElementById('count').innerHTML = count;
}

// decrement the count variable when the decrement button is clicked
function decrement() {
    if (count <= 0)
    {
        return;
    }
    count--;
    // change the count element in the DOM to match the count variable
    document.getElementById('count').innerHTML = count; 
}

// reset the count variable when the reset button is clicked
function reset() {
    count = 0;
    // change the count element in the DOM to match the count variable
    document.getElementById('count').innerHTML = count; 
}