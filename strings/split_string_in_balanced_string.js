//leetcode : 1221

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let rcnt = 0;
    let lcnt = 0;

    let res = 0;
    for(let i = 0;i<s.length;i++)
    {
        if(s[i] == "R")
        {
            rcnt++
        }
        if(s[i] == "L")
        {
            lcnt++
        }
        if(rcnt == lcnt)
        {
            res++;
            rcnt = 0;
            lcnt = 0;
        }
    }
    return res;
};


    /**
    * @param {string} s
    * @return {number}
    */
    var balancedStringSplit = function(s) {

        let tmp = 0;
        let res = 0;
        for(let i = 0;i<s.length;i++)
        {
            if(s[i] == "R")
            {
                res++
            }
            if(s[i] == "L")
            {
                res--
            }
            if(res == 0)
            {
                tmp++;
        
            }
        }
        return tmp;
    };