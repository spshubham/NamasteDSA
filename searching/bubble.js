//let arr = [1,5,66,4,88,96,36,25,23,14]
let arr = [1,2,3,4,5,6,7,8,9,]
let n = arr.length;
for(let i = 0;i<n-1;i++)
{
    let isSwapped = false;
    for(let j = 0;j<n-1-i;j++)
    {
        if(arr[j]>arr[j+1])
        {
            let tmp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = tmp;
            isSwapped = true;
        }
    }
    if(!isSwapped) break 
}
console.log(arr)