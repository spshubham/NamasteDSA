//leetcode = 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, t) {
    
    let ans = new Map();
    for(let i = 0;i<nums.length;i++)
    {
        let diff = Math.abs(t-nums[i])
        if(ans.has(diff))
        {
            return [i,ans.get(diff)]
        }
        else
        {
            ans.set(nums[i],i)
        }
    }
};