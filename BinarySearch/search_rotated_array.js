//leetcode = 33
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, t) {
    console.log(nums)

    let l = 0;
    let r = nums.length-1;

    while(l<=r)
    {
        let m = Math.floor((l+r)/2)

        if(t == nums[m]) return m

        if(nums[l]<=nums[m])
        {
            if(t<nums[m] && t>=nums[l])
            {
                r = m-1
            }
            else
                l = m+1
        }
        else
        {
            if(t>nums[m] && t<=nums[r])
            {
                l = m+1
            }
            else
                r = m-1
        }
    }
    return -1;
};