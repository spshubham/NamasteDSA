//leetcode = 540
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l = 0;
    let r = nums.length-1;

    while(l<=r)
    {
        let m = l+Math.floor((r-l)/2)
        //pair exist on left side
        if(nums[m] == nums[m-1])
        {
            leftCount = m-1-l;

            if(leftCount % 2 == 1)
            {
                r = m-2;
            }
            else
            {
                l = m+1
            }
        }//pair exist right side
        else if(nums[m] == nums[m+1])
        {
             leftCount = m-l;

            if(leftCount % 2 == 1)
            {
                r = m-1;
            }
            else
            {
                l = m+2
            }
        }
        //single ele
        else
        {
            return nums[m]
        }
    }
};
