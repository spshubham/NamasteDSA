//leetcode : 3541
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vmap = new Map();
    let cmap = new Map()
    for(let i = 0;i<s.length;i++)
    {
        if(s[i] == "a"|| s[i] == "e"|| s[i] == "o"|| s[i] == "u"|| s[i] == "i")
        {
            vmap.set(s[i],vmap.get(s[i])+1 || 1)
        }
        else
        {
             cmap.set(s[i],cmap.get(s[i])+1 || 1)
        }    
    }
    let cmax = 0;
    let vmax = 0;
    for(let [k,v] of cmap)
    {
        if(v > cmax)
        {
            cmax = v
        }
    }
    for(let [k,v] of vmap)
    {
        if(v > vmax)
        {
            vmax = v
        }
    }

    return cmax + vmax
};