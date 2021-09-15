
let insertionsort = async (array) => {
    let size = array.length;
    console.log(size);
    for(let i = 1; i < size; i++){
        // array[i].style.background = "red";
        let currentELe = array[i].style.height;
        array[i].style.background = "red";
        let positionHolder = i; // starts of with 1.
        await waitTimer(50);
        while(positionHolder > 0 && array[positionHolder-1].style.height > currentELe){
            await waitTimer(50);
            array[positionHolder].style.background = "orange";
            array[positionHolder].style.height = array[positionHolder-1].style.height;
            positionHolder = positionHolder - 1;
        }
        // array[positionHolder].style.background = "blue";
        array[positionHolder].style.height  = currentELe;
        array[i].style.background = "blue";
    }

}

document.querySelector("#insertionsort").addEventListener('click', async () => {
    let array = document.querySelectorAll("#bars");
    await insertionsort(array);
    // console.log(array);
});