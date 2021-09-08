let barHeight = [5, 3, 4, 7, 9, 11, 20, 21, 12, 15];

function bubbleSorting(){
    let value = [];
    let holder = [];
    value = document.querySelectorAll("#bars");
    // console.log(value.length);
    for(let i = 0; i < value.length; i++){
        holder[i] = parseInt(value[i].style.height);
    }
    for(let i = 0; i < holder.length-1; i++){
        let swapped = false
        for(let j = 0; j < holder.length-i-1; j++){
            // console.log(barHeight[j]);
            if(holder[j] > holder[j+1]){
                // console.log("here");
                let temp = holder[j];
                holder[j] = holder[j+1];
                holder[j+1] = temp;
                swapped = true;
            }
        } 
        if(swapped == false){
            break;
        }
    }
    // console.log(holder.length);
    for(let j = 0; j < holder.length; j++){
        console.log(holder[j]);
    }
    
}

document.querySelector("#bubbleSort").addEventListener("click", function(){
    bubbleSorting();
    // for(let k = 0; k < barHeight.length; k++){
    //     console.log(barHeight[k]);
    // }
});