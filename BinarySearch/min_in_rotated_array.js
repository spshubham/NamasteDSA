//leetcode = 153


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    let l = 0;
    let r = nums.length-1;

    if(nums[l]<=nums[r]) return nums[l];

    while(l<=r)
    {
        //if already sorted
         if(nums[l]<=nums[r]) return nums[l];
        let m = l+ Math.floor((r-l)/2);

        if(nums[m]<nums[m-1])
        {
            return nums[m]
        }

       // if left half is not sorted
        if(nums[l]>nums[m])
        {
            r = m-1;
        }
        else
        {
            l = m+1
        }
    }
};