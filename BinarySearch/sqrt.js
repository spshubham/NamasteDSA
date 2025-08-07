//leetcode = 69
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<=0) return 0
    else if(x<3) return 1
    let left = 2;
    let right = Math.floor(x/2)
    while(left<=right)
    {
        let mid = Math.floor((left+right)/2);

        if(x == (mid * mid)) return mid;
        else 
        if(x> (mid * mid)){
            left = mid+1;
        } 
        else
            {
                right =  mid-1
            }
    }
    return right
    
};