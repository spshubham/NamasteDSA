let arr = [7,8,9,14,25,36,37,1,2,6]


function secondLargest(arr)
{
    let first = -Infinity;
    let sec;

    for(let i = 0;i<arr.length;i++)
    {
        if(arr[i]>first)
        {
            sec = first;
            first = arr[i]
        }
        else
            if(arr[i]>sec)
            {
                sec = arr[i]
            }
    }
    return sec;
}
let res = secondLargest(arr)
console.log(res)