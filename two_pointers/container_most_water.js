//leetcode = 11
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(arr) {
    
    let i = 0;
    let j = arr.length-1;
    let max = 0;
    let cap;
    while(i!=j)
    {
        
            let len = j - i;
            if(arr[i]>arr[j])
            {    cap = arr[j] * len
                j--
            }    
            else
            {
                 cap = arr[i] * len
                i++
            }
                 
            
            console.log(j,i,len,arr[j],cap)
            if(cap>max)
                max = cap;
               
        
    }
    return max;
};


var maxArea = function(arr) {
    let i = 0;
    let j = arr.length - 1;
    let maxWater = 0;
    while(i < j){
        let area = Math.min(arr[i], arr[j]) * (j-i);
        maxWater = Math.max(maxWater, area);
        if(arr[i] > arr[j]) {
            --j;
        } else {
            ++i;
        }
    }
    return maxWater;
};