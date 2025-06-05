let arr = [1,5,88,9,3,6,55]

let n =arr.length

for(let i = 1;i<n;i++)
{
    let curr = arr[i];
    let p = i-1;

    while(arr[p]>curr && p>=0)
    {
        arr[p+1] = arr[p]
        p--;
    }
    arr[p+1] = curr
}
console.log(arr)