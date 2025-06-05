let arr = [1,5,7,11,55,66,994,2500,3369,4700]
let target = 66;

function binaryS(l,r)
{
    if(l>r) return -1
    let mid = Math.floor((l+r)/2);
    if(arr[mid] == target)  return mid;
    //console.log(mid, arr[mid])
    

    if(arr[mid]>target)
    {
        r = mid -1
        return binaryS(l,r)
    }
    else
    {
        l = mid + 1
        return binaryS(l,r)
    }
}
console.log(binaryS(0,arr.length-1))