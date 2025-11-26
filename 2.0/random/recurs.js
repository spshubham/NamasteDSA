let arr = [5,12,8,10,20]


function rec(n)
{
    if(n==0)
        return arr[n]
    return arr[n]+rec(n-1)
}

function fact(n)
{
    if(n==1)
        return 1
    return n * fact(n-1)
}
console.log(fact(2))