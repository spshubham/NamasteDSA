//leetcode : 771

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jp, s) {
    let cnt = 0;

    for(let i = 0;i<jp.length;i++)
    {
        for(let j = 0;j<s.length;j++)
        {
            if(jp[i] == s[j])
            {
                cnt++
            }
        }
    }
    return cnt;
};

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(j, s) {

    let news = new Set();

    for(let i = 0;i<j.length;i++)
    {
        news.add(j[i])
    }
    let cnt = 0;

    for(let i = 0;i<s.length;i++)
    {
        if(news.has(s[i]))
            cnt++
    }

    return cnt;
    
};