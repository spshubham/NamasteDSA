// leetcode = 34

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, t) {

    let l = 0;
    let r = nums.length - 1;

    let ans = [-1, -1]
    while (l < r) {
        let m = l + Math.floor((r - l) / 2)

        if (nums[m] < t) {
            l = m + 1
        }
        else {
            r = m
        }
    }
    if (nums[l] == t)
        ans[0] = l

    l = 0;
    r = nums.length - 1;

    while (l < r) {
        let m = l + Math.ceil((r - l) / 2)

        if (nums[m] > t) {
            r = m - 1
        }
        else {
            l = m
        }
    }
    if (nums[r] == t)
        ans[1] = r

    return ans
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, t) {
    
    let l = 0;
    let r = nums.length;

    let ans = [-1,-1]

    while(l<=r)
    {
        let m = l+Math.floor((r-l)/2)
        if(nums[m] == t)
        {
            ans[0] = m;
            r = m-1
        }
        else
        if(nums[m]<t)
        {
            l = m+1
        }
        else
        {
            r = m-1
        }
    }


     l = 0;
     r = nums.length;
    while(l<=r)
    {
        let m = l+Math.floor((r-l)/2)
        if(nums[m] == t)
        {
            ans[1] = m;
            l = m+1
        }
        else
        if(nums[m]<t)
        {
            l = m+1
        }
        else
        {
            r = m-1
        }
    }
    return ans;
};