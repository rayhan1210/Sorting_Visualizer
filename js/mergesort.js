/** 
 * Alorithm:
 * Like quicksort, uses divide and conqueror algorithm, worst case is O(nlogn).
 */
async function mergesort(array, left, right){
   if(left < right){
       let mid = left + parseInt((right-left)/2);
        await mergesort(array, left, mid);
        await mergesort(array, mid+1, right);
        await merge(array, left, mid, right);
   }
    
}
//Used for merging 
async function merge(array, left, mid, right){
    let lenLeft = mid-left+1;
    let lenRight = right-mid;
    let leftArr = []; //left subarray 
    let rightArr = []; //right subarray
    //used for copying data to leftArr.
    for(let i = 0; i < lenLeft; i++){
        await waitTimer(delay);
        leftArr[i] = array[left + i].style.height; //putting elements to left sub array
        array[left + i].style.background = "#0F0E39"; //changing color for left subarray so we can see it
    }
    //used for copying data to rightArr
    for(let j = 0; j < lenRight; j++){
        await waitTimer(delay);
        rightArr[j] = array[mid+1+j].style.height; //putting elements to right sub array
        array[mid+1+j].style.background = "#3D083F"; //changing color for right subarray so we can see it
    }
    // await waitTimer(delay);
    let a = 0; //index for left
    let b = 0; //index for right
    let k = left; //merged subarray index
    //Loop used for merging the subarrays left and right back 
    while( a < lenLeft && b < lenRight){
        await waitTimer(delay);
        if(leftArr[a] <= rightArr[b]){ //check left value with right 
            array[k].style.background = "#C698DB";
            array[k].style.height = leftArr[a];
            // console.log("In if length: " + leftArr.length + " lenLeft: " + lenLeft +" lenRight: "+lenRight+ " k: " +k);
            a++;
        }else{
            array[k].style.background = "#C698DB";
            array[k].style.height = rightArr[b];
            // console.log("In else length: " + rightArr.length + " lenRight: " + lenRight +" lenLeft: "+lenLeft+ " k: " +k);
            b++;
        }
        k++;
    }

    while(a < lenLeft){
        await waitTimer(delay);
        array[k].style.background = "#C698DB";
        console.log("k: "+ k+ " a: " + a + " lenLeft: "+ lenLeft);
        // console.log("In while left length: " + leftArr.length + " lenLeft: " + lenLeft + " lenRight: "+lenRight  +" k: " +k);;
        console.log("array[k].style.height: " + array[k].style.height + " leftArr[a]: " + leftArr[a]);
        array[k].style.height = leftArr[a];
        console.log("after changing array[k].style.height: " + array[k].style.height);
        a++;
        k++;
    }
    
    while(b < lenRight){
        await waitTimer(delay);
        // console.log("In while right length: " + rightArr.length + " lenRight: " + lenRight +" lenLeft: "+lenLeft + " k: " +k);
        array[k].style.background = "#C698DB";
        array[k].style.height = rightArr[b];
        b++;
        k++;
    }
}


document.querySelector('#mergesort').addEventListener('click', async () => {
    let value = document.querySelectorAll("#bars");//[2, 5, 1, 22, 15, 17, 21];
    // console.log("OK");
    if(checkSorted(value) === true){
        document.querySelector(".add-warning").innerHTML = "Reset the element";
        // document.querySelector(".wrapper").classList.add("bg-warning");
        document.querySelector(".wrapper").style.display = "inline-block";
    }else{
        disableSorting();
        disableResetAndSize();
        await mergesort(value, 0, value.length-1);
        enableSorting();
        enableResetAndSize();
    }
});