//leetcode = 167

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, t) {
    
    let i = 0;
    let j = nums.length-1;
    while(i != j)
    {
        if(nums[i]+nums[j] == t)
            return [i+1,j+1]
        else
            if(nums[i]+nums[j]>t)
                j--
            else
                i++     
    }
};

