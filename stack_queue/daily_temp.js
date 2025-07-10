/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

//leetcode == 739


var dailyTemperatures = function(t) {
    let s = [];
    let n = t.length;
    s.push(n-1)
    let arr = Array(n).fill(0);
    arr[n-1] = 0;

    for(let i = n-2;i>=0;i--)
    {
        while(s.length)
        {
            let top = s[s.length-1];
            if(t[i]>=t[top])
            {
                s.pop()
            }
            else
            {
                arr[i] = top-i
                break;
            }
        }
        s.push(i)
    }
    return arr

};