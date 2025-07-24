const Merge = (arr, left, middle, right) =>{
    let n1 = middle - left + 1;
    let n2 = right - middle;

    let leftContainer = arr.slice(left, middle + 1);
    let rightContainer = arr.slice(middle + 1, right + 1);

    let i = 0, j = 0, k = left;

    while(i < n1 && j < n2)
    {
        if(leftContainer[i] <= rightContainer[j]) arr[k++] = leftContainer[i++];
        else arr[k++] = rightContainer[j++];
    }

    while(i < n1){
        arr[k++] = leftContainer[i++];
    }

    while(j < n2){
        arr[k++] = rightContainer[j++];
    }

    return arr;
}

function MergeSort(arr){
    const MergeSortHelper = (arr, left, right) => {
        if(left < right){
            let middle = Math.floor((left + right)/2);
            MergeSortHelper(arr, left, middle);
            MergeSortHelper(arr, middle + 1, right);
            Merge(arr, left, middle, right);
        }
    }
    MergeSortHelper(arr, 0, arr.length -1)
    return arr;
}

let a1 = [105, 79, 100, 110];
let a2 = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(MergeSort(a1));
console.log(MergeSort(a2));