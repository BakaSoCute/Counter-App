let button = document.getElementById('button+');
let counterText = document.getElementById('counter')
let buttonReset = document.getElementById('button-')
const COUNTER_INITIAL_VALUE = 0;
let counter = COUNTER_INITIAL_VALUE;
button.addEventListener('click', function(){
    counter = counter + parseInt(button.dataset.pools);
    counterText.innerText = counter;
});
buttonReset.addEventListener('click', function () {
    counter = parseInt(buttonReset.dataset.pools);
    counterText.innerText = counter;
})
console.log(counterText.dataset)