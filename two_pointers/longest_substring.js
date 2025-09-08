//leetcode = 3

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let i = 0;
    let j = 0;
    let map = {};
    let maxS = 0
    for(j = 0;j<s.length;j++)
    {
        if(map[s[j]] != undefined && map[s[j]] >= i)
        {
            i = map[s[j]]+1
        }
        map[s[j]] = j;
        currWs = j-i+1
        maxS = Math.max(maxS,currWs)

    }
    return maxS

};