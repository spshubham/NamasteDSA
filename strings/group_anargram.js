//leetcode : 49
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}
    for(let i = 0;i<strs.length;i++)
    {
        let sortedKey = strs[i].split("").sort().join("");
        if(!map[sortedKey])
        {
            map[sortedKey] = [strs[i]]
        }
        else
        {
            map[sortedKey].push(strs[i])
        }
    }
    let res = Object.values(map)
    return res
};

//using hashkey

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(s) {
    let map = new Map()
    for(let i = 0;i<s.length;i++)
    {
        let freqArr = Array(26).fill(0);
        let str = s[i]

        for(let j =0;j<str.length;j++)
        {
           let ind =  str[j].charCodeAt() - 'a'.charCodeAt();
           ++freqArr[ind]
        }
        let key = "";

        for(let k = 0;k<26;k++)
        {
            key = key+String.fromCharCode(k)+freqArr[k]
        }
        if(!map[key])
        {
            map[key] = [str]
        }
        else
        {
            map[key].push(str)
        }
    }
    return [...Object.values(map)];
};