let arr = [1,5,7,11,55,66,994,25,3369,47]
let target = 1;

function linearS(arr,t)
{
    for(let i = 0;i<arr.length;i++)
    {
        if(arr[i] == t)
            return i
    }
    return -1
}


function linearRecursion(i)
{
    if(arr[i]<0) return -1
        
    if(arr[i] == target)
            return i
    else
    {
        return linearRecursion(i-1)
    }    
    
}
//console.log(linearS(arr,target))
//console.log(linearRecursion(arr.length-1))