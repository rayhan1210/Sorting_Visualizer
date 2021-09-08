// export { bubbleSorting } from './bubbleSorting';

const bar = [];
let randNums = [];
let arraySize = document.querySelector("#slider").value;

createMoreBars(arraySize);
document.querySelector("#createMoreBars").addEventListener("click", () => {
    createMoreBars(arraySize = 10);
    document.querySelector("#slider").value = 10;
});
document.querySelector("#slider").addEventListener("input", function(){
    arraySize = document.querySelector("#slider").value;
    createMoreBars(arraySize);
})



//functions
function randomNumGenerator(val){
    randNums = [];
    for(let i = 0; i < val; i++){
        randNums.push((Math.random()*100) + 50);
    }
    // console.log("Here: " + randNums);
}
function checkRand(){
    console.log("randums: " + randNums);
}
function createMoreBars(arraySize){
    clearDivs();
    randomNumGenerator(arraySize);
    for(let i = 0; i < arraySize; i++){
        bar[i] = document.createElement("div");
        bar[i].setAttribute("id", "bars");
        bar[i].style.width = "50px";
        let barHeight = randNums[i]*2;
        bar[i].style.height = `${barHeight}px`;
        console.log("for loop Here: " + barHeight);
        colorPicker(bar, i);
        document.getElementById("box").appendChild(bar[i]);
    }
    // console.log("randums: " + randNums);
}

function clearDivs() {
    const val = document.querySelector('#box').innerHTML = '';
}
function colorPicker(bar, len){
    bar[len].style.background = "#0789a6";
    for(let i = 0; i < bar.length; i += 2){
        bar[i].style.background = "#abb802";
    }
}
//clearDivs();