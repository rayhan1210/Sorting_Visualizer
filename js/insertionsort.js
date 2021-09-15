/**
 * Algorithm:
 * has a time complexity of O(n^2), Insertion sort is inplace and stable.
 * 
 */
let insertionsort = async (array) => {
    let size = array.length;
    for(let i = 1; i < size; i++){
        let currentELe = array[i].style.height;
        let positionHolder = i; // starts of with index 1.
        await waitTimer(delay); //adding delay to for the animaton
        array[i].style.background = "aqua";
        //compare the previous element with current and if bigger change them.
        while(positionHolder > 0 && array[positionHolder-1].style.height > currentELe){
            //current position thats being changed based on height comparison
            array[positionHolder].style.background = "orange";  
            array[positionHolder].style.height = array[positionHolder-1].style.height;
            positionHolder = positionHolder - 1; //decrementing, so to be able to check the prev element.
            await waitTimer(delay); //adding delay to for the animaton
            //Used for changing color
            for(let j = i; j >= 0; j--){
                array[j].style.background = "aqua";
            }
        }
        array[positionHolder].style.height  = currentELe;
        array[i].style.background = "aqua";
    }

}

document.querySelector("#insertionsort").addEventListener('click', async () => {
    let array = document.querySelectorAll("#bars");
    //if check to add a warning message.
    if(checkSorted(array) === true){
        document.querySelector(".add-warning").innerHTML = "Reset the element";
        // document.querySelector(".wrapper").classList.add("bg-warning");
        document.querySelector(".wrapper").style.display = "inline-block";
    }else{
        disableSorting();
        disableResetAndSize();
        await insertionsort(array);
        enableSorting();
        enableResetAndSize();
    }
});