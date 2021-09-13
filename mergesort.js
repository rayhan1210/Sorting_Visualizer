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
let delay = 50;
async function merge(array, left, mid, right){
    let lenLeft = mid-left+1;
    let lenRight = right-mid;
    let leftArr = [];
    let rightArr = [];
    for(let i = 0; i < lenLeft; i++){
        await waitTimer(delay);
        leftArr[i] = array[left + i].style.height;
        array[left + i].style.background = "red";
    }
    for(let j = 0; j < lenRight; j++){
        await waitTimer(delay);
        rightArr[j] = array[mid+1+j].style.height;
        array[mid+1+j].style.background = "orange";
    }
    await waitTimer(delay);
    let a = 0; 
    let b = 0;
    let k = left;
    // await waitTimer(50);
    while( a < lenLeft && b < lenRight){
        await waitTimer(delay);
        if(leftArr[a] <= rightArr[b]){
            array[k].style.background = "LightGreen";
            array[k].style.height = leftArr[a];
            // console.log("In if length: " + leftArr.length + " lenLeft: " + lenLeft +" lenRight: "+lenRight+ " k: " +k);
            a++;
        }else{
            array[k].style.background = "LightGreen";
            array[k].style.height = rightArr[b];
            // console.log("In else length: " + rightArr.length + " lenRight: " + lenRight +" lenLeft: "+lenLeft+ " k: " +k);
            b++;
        }
        k++;
    }
    while(a < lenLeft){
        await waitTimer(delay);
        array[k].style.background = "LightGreen";
        // console.log("In while left length: " + leftArr.length + " lenLeft: " + lenLeft + " lenRight: "+lenRight  +" k: " +k);;
        array[k].style.height = leftArr[a];
        a++;
        k++;
    }
    
    while(b < lenRight){
        await waitTimer(delay);
        // console.log("In while right length: " + rightArr.length + " lenRight: " + lenRight +" lenLeft: "+lenLeft + " k: " +k);
        array[k].style.background = "LightGreen";
        array[k].style.height = rightArr[b];
        b++;
        k++;
    }
}


document.querySelector('#mergesort').addEventListener('click', async () => {
    let value = document.querySelectorAll("#bars");//[2, 5, 1, 22, 15, 17, 21];
    // console.log("OK");
    await mergesort(value, 0, value.length-1);
    // console.log(value);
});