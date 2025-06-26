//leetcode 58

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.trim().split(" ");
    console.log(arr)
    return arr[arr.length-1].length
};


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let cnt = 0;

    for(let i = s.length-1;i>=0;i--)
    {
        if(s[i]== " ")
        {
            if(cnt>0)
            {
                return cnt;
            }
        }
        else
        {
            cnt++
        }
    }
    return cnt;
};