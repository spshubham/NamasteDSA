let arr = [7,55,2,6,99,4,2,556,1]
let n = arr.length;
for(let i= 0;i<n-1;i++)
{
    let min = i;

    for(let j = i+1;j<n;j++)
    {
        if(arr[j]<arr[min])
        {
            min = j
        }
    }
    if(min!=i)
    {
        let tmp = arr[i]
    arr[i] = arr[min]
    arr[min] = tmp
    }
}
console.log(arr)