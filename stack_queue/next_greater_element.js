//leetcode = 496
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(a1, arr) {
    let map = {};
    let s = [];

    let n = arr.length;
    s.push(arr[n-1])
    map[arr[n-1]] = -1;

    for(i = n-2;i>=0;i--)
    {
        let top = s[s.length-1]
        if(arr[i]<top)
        {
            map[arr[i]] = top;
            //s.push(arr[i])
        }
        else
        {
            while(s.length)
            {
                if(s[s.length-1] < arr[i])
                {
                    s.pop();
                }
                else
                {
                    map[arr[i]] = s[s.length-1]
                    break;
                }
            }
            if(s.length ==0)
            {
                map[arr[i]] = -1
            }
        }
        s.push(arr[i])
    }
    let ans = [];
    for(let i =0;i<a1.length;i++)
    {
        ans.push(map[a1[i]])
    }
    return ans;
};