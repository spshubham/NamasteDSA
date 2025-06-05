function fun(num)
{
    if(num == 0)
        return
    console.log(num)
    num = num- 1;
    fun(num)
}
//fun(5)

function sum(num)
{
    if(num==0) return 0
    return num + sum(num-1)

}
//console.log(sum(3))


let arr = [1,2,3,4,5]
function sumArr(n)
{
    if(n==0) return arr[0];
    return arr[n] + sumArr(n-1)
}

function sumArrOdd(n)
{
    let isOdd = arr[n] % 2 !=0
    if(n==0 ) {
        if(isOdd)
            return arr[n]
        else
            return 0
    }
    
    if(isOdd) return arr[n] + sumArrOdd(n-1)
        else return 0+sumArrOdd(n-1)
}
//console.log(sumArr(arr.length-1))

//console.log(sumArrOdd(arr.length-1))


function fact(n)
{
    if(n == 1)  
        return 1
    return n * fact(n-1) 
}
console.log(fact(5))