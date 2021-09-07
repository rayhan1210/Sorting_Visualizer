

// function showText(){
//     document.getElementById("box").style.width= 180+"px";
//     document.getElementById("box").style.height = 140+"px";
//     document.getElementById("box").style.background = "#ff0000";
// }

// showText();
const bar = [];
createMoreBars();

function createMoreBars(arraySize = 10){
    clearDivs();
    let randNums = [];
    for(let i = 0; i < arraySize; i++){
        randNums.push((Math.random()*100) + 50);
    }
    for(let i = 0; i < arraySize; i++){
        bar[i] = document.createElement("div");
        bar[i].setAttribute("id", "bars");
        bar[i].style.width = "50px";
        let barHeight = randNums[i]*2;
        bar[i].style.height = `${barHeight}px`;
        console.log(barHeight);
        colorPicker(bar, i);
        //Ok
        document.getElementById("box").appendChild(bar[i]);
    }
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