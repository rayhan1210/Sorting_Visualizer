// export { bubbleSorting } from './bubbleSorting';

const bar = [];
let randNums = [];
let arraySize = document.querySelector("#size").value;
let delay = document.querySelector("#animationspeed").value;
let maxDelay = document.querySelector("#animationspeed").max;
createMoreBars(arraySize);
document.querySelector("#createMoreBars").addEventListener("click", () => {
    createMoreBars(arraySize = 10);
    document.querySelector("#size").value = 10;
});
document.querySelector("#size").addEventListener("input", function(){
    arraySize = document.querySelector("#size").value;
    createMoreBars(arraySize);
});
document.querySelector("#animationspeed").addEventListener('input', () => {
    delay = maxDelay - document.querySelector("#animationspeed").value;
});

function elementSwapper(element1, element2){
    let temp = element1.style.height;
    element1.style.height = element2.style.height;
    element2.style.height = temp;
}
// function used inside async function for generating the sorting animation.
// is invoked from  async function, waits for a timeout
let waitTimer = (delay) => { 
    return new Promise(function(myResolve){
        setTimeout(function() {
            myResolve('Waiting')
        }, delay);
    });
};

//functions for random genrating number.
function randomNumGenerator(val){
    randNums = [];
    for(let i = 0; i < val; i++){
        randNums.push((Math.random()*100) + 50);
    }
}

function createMoreBars(arraySize){
    document.querySelector(".wrapper").style.display = "none";
    clearDivs();
    randomNumGenerator(arraySize);
    for(let i = 0; i < arraySize; i++){
        bar[i] = document.createElement("div");
        bar[i].setAttribute("id", "bars");
        bar[i].style.width = "10px";
        bar[i].style.margin = "1.5px";
        let barHeight = randNums[i]*2;
        bar[i].style.height = `${barHeight}px`;
        colorPicker(bar, i);
        document.getElementById("box").appendChild(bar[i]);
    }
}

// clear out old divs before generating new ones.
function clearDivs() {
    const val = document.querySelector('#box').innerHTML = '';
}
// pick a different color for every 2nd element
function colorPicker(bar, len){
    bar[len].style.background = "#0789a6";
    for(let i = 0; i < bar.length; i += 2){
        bar[i].style.background = "#abb802";
    }
}
function checkSorted(value){
    let sorted = true;
    for(let i =0; i < value.length-1; i++){
        if(value[i].style.height > value[i+1].style.height){
            sorted = false;
            break;
        }
    }
    return sorted;
}
let disableSorting = () => {
    document.querySelector("#bubbleSort").disabled = true;
    document.querySelector("#insertionsort").disabled = true;
    document.querySelector("#quicksort").disabled = true;
    document.querySelector("#mergesort").disabled = true;
}
let disableResetAndSize = () => {
    document.querySelector("#createMoreBars").disabled = true;
    document.querySelector("#size").disabled = true;
}
let enableResetAndSize = () => {
    document.querySelector("#createMoreBars").disabled = false;
    document.querySelector("#size").disabled = false;
}
let enableSorting = () => {
    document.querySelector("#bubbleSort").disabled = false;
    document.querySelector("#insertionsort").disabled = false;
    document.querySelector("#quicksort").disabled = false;
    document.querySelector("#mergesort").disabled = false;
}