/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let arr = [...nums,...nums]
    let n = arr.length;

    let s = [];
    let ans = Array(n).fill(-1);

    for(let i = n-2;i>=0;i--)
    {
        while(s.length)
        {
            let top = s[s.length-1];
            if(arr[i]<top)
            {
                ans[i] = top;
                break
            }
            else
            {
                s.pop();
            }
        }
        s.push(arr[i])
    }
    return ans.slice(0,n/2)
};