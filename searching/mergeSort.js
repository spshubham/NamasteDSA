function mergeSort(arr)
{
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
}

function merge(left,right)
{
    let res = [];
    let i = 0;
    let j = 0;

    while(i<left.length && j<right.length)
    {
        if(left[i]<right[j])
        {
            res.push(left[i])
            i++
        }
        else
        {
            res.push(right[j])
            j++;
        }
    }
    return [...res, ...left.slice(i), ...right.slice(j)]
}

let arr =[41,12,5,6,89,1,2,63,88]
console.log(mergeSort(arr))