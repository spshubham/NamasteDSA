// function printP(){
//     console.log(a)
// }

// let a = 10;
// printP()


function findLargest(arr)
{
    let max = -Infinity;
    let m = 0;
    for(let i = 0;i<arr.length;i++)
    {
        if(max<arr[i])
        {
            max = arr[i]
        }
    }
    return max;
}


function findSmallest(arr)
{
    let min = Infinity;
    let m = 0;
    for(let i = 0;i<arr.length;i++)
    {
        if(min>arr[i])
        {
            min = arr[i]
        }
    }
    return min;
}

function findSecondLargest(arr)
{
    let max = -Infinity;
    let smax;
    for(let i = 0;i<arr.length;i++)
    {
        if(max<arr[i])
        {   smax = max;
            max = arr[i]
        }
        else if(arr[i]>smax)
        {
            smax = arr[i]
        }
    }
    return smax;
}


// console.log(findLargest([4,5,9,12,78,90,45,633]))
// console.log(findSmallest([4,5,9,12,78,90,45,633]))
console.log(findSecondLargest([4,5,9,12,78,90,45,633]))