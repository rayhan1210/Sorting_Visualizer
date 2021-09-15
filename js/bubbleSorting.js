/** 
 * Algorithm: 
 * Bad for large dataset and avaerage and worst case complesxity => O(n^2).
 * 
 * Note:
 * The bubble sort algorithm can be optimized by checking if any swapped performed or not
 * and if no swap performed then stop the algorithm in inner loop where swapping is performed
 */

async function bubbleSorting(value){
    for(let i = 0; i < value.length; i++){
        for(let j = 0; j < value.length-i-1; j++){
            // the current two element that are being swapped.
            value[j].style.background = "#6251a8";
            value[j+1].style.background = "#6251a8";
            if(value[j].style.height > value[j+1].style.height){   
                await waitTimer(delay); // adds a delay for each swap.
                elementSwapper(value[j], value[j+1]);
            }
            // the two element that swapped
            value[j].style.background = "#ab6503";
            value[j+1].style.background = "#ab6503";
        }
        // the highest one color gets changed
        value[value.length-1-i].style.background = "#1f7056";
    }
}

document.querySelector("#bubbleSort").addEventListener("click", async () => {
    let val =  document.querySelectorAll("#bars");
    // console.log(val[0].style.height);
    if(checkSorted(val) === true){
        document.querySelector(".add-warning").innerHTML = "Reset the element";
        // document.querySelector(".wrapper").classList.add("bg-warning");
        document.querySelector(".wrapper").style.display = "inline-block";
    }else{
        disableSorting();
        disableResetAndSize();
        await bubbleSorting(val);
        enableSorting();
        enableResetAndSize();
    }
    
});