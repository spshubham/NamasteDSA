//leetcode : 125

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let fstring ="";
    let rev = ""
    s = s.toLowerCase();
    for(let i = 0;i<s.length;i++)
    {
        if(s[i].match(/[a-z0-9]/i))
        {
            fstring = fstring+s[i];
            rev = s[i]+rev;
        }
    }
    return rev == fstring
};


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i = 0;
    let j = s.length-1;
    s = s.toLowerCase();
    while(i<j)
    {
        if(!s[i].match(/[a-z0-9]/))
        {
            i++
        }
        else
        {
            if(!s[j].match(/[a-z0-9]/))
            {
                j--;
            }
            else if(s[i] == s[j])
            {
                i++;
                j--;
            }
            else
            {
                return false
            }
        }
    }
    return true
};