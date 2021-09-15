/**
 * Algorithm:
 * 
 * 
 */
let insertionsort = async (array) => {
    let size = array.length;
    console.log(size);
    for(let i = 1; i < size; i++){
        let currentELe = array[i].style.height;
        let positionHolder = i; // starts of with 1.
        await waitTimer(delay);
        array[i].style.background = "aqua";
        while(positionHolder > 0 && array[positionHolder-1].style.height > currentELe){
            //current position thats being changed based on height comparison
            array[positionHolder].style.background = "orange";  
            array[positionHolder].style.height = array[positionHolder-1].style.height;
            positionHolder = positionHolder - 1;
            await waitTimer(delay);
            //changing color
            // console.log("i: " + i);
            for(let j = i; j >= 0; j--){
                // console.log("j: " + j);
                array[j].style.background = "aqua";
            }
        }
        array[positionHolder].style.height  = currentELe;
        array[i].style.background = "aqua";
    }

}

document.querySelector("#insertionsort").addEventListener('click', async () => {
    let array = document.querySelectorAll("#bars");
    if(checkSorted(array) === true){
        document.querySelector(".add-warning").innerHTML = "Reset the element";
        document.querySelector(".wrapper").classList.add("bg-warning");
        document.querySelector(".wrapper").style.display = "inline-block";
    }else{
        disableSorting();
        disableResetAndSize();
        await insertionsort(array);
        enableSorting();
        enableResetAndSize();
    }
});