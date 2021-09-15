/**
 * Algortihm:
 * good for large dataset and average & worst case complexity => O(n^2), best case is O(nlogn)
 * 
 * 
 * Some Notes:
 * In line : wait for the partition to happen.
 * In line : await the left side of quickSort.
 * Alternate way to do Line 26 and Line 31 - 33: 
 * use pointRight = right; 
 * and in while loop use pre-decrement instead of post, 
 * like this while(val[--pointRight].style.height) 
 * this have the same effect as it decrements first before checking.
 */


async function quickSort(val, left, right){
    if((right-left) <= 0){
        return;
    }else{
        let partition = await partitioner(left, right, val); // wait for the partition to happen
        await quickSort(val, left, partition-1); //await the left side of quickSort
        await quickSort(val, partition+1, right); //await the right side of quicksort
        val[right].style.background = "#38C9C9"; // after computation done change it to same color as rest
    }
}

let partitioner = async (left, right, val) => {
    let pointLeft = left; // low index, the first element index.
    let pointRight = right-1; //excluding the pivot value
    let pivot = right;
    let pivotEle = val[right].style.height;
    val[pivot].style.background = "blue"; // use it to track the pivot element
    while(true){
        while(val[pointLeft].style.height < pivotEle){
            pointLeft++;
        }
        while(pointRight > 0 && val[pointRight].style.height > pivotEle){ 
            //pointRight > 0 is to make sure index is not -1,-2,.. 
            //which would try access element outside indexBound that does not exist
            pointRight--;
        }
        val[pointLeft].style.background = "red";
        val[pointRight].style.background="green";
        if(pointLeft >= pointRight){
            break;
        }else{
            await waitTimer(delay);
            elementSwapper(val[pointLeft], val[pointRight]);
            changeSwappedElementColor(val, pointLeft, pointRight);
        }
    }
    await waitTimer(delay);
    // val[pointLeft].style.background = "#38CA9A";
    // val[right].style.background="#C938A5";
    elementSwapper(val[pointLeft], val[right]);
    changeSwappedElementColor(val, pointLeft, pointRight);
    return pointLeft; 
}

function changeSwappedElementColor(val, i, j){
    val[i].style.background = "#38C9C9";
    val[j].style.background = "#38C9C9";
}

document.querySelector("#quicksort").addEventListener("click", async () => {
    let val =  document.querySelectorAll("#bars");
    if(checkSorted(val) === true){
        document.querySelector(".add-warning").innerHTML = "Reset the element";
        // document.querySelector(".wrapper").classList.add("bg-warning");
        document.querySelector(".wrapper").style.display = "inline-block";
    }else{
        disableSorting();
        disableResetAndSize();
        await quickSort(val, 0, val.length-1);
        enableSorting();
        enableResetAndSize();
    }
    
});