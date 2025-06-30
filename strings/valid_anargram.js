/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//leetcode 242
var isAnagram = function(s, t) {

    if(s.length != t.length) return false
    let p = new Map();
    let r = new Map();

    for(let i = 0;i<s.length;i++)
    {
        p.set(s[i],p.get(s[i])+1 || 1 )
    }
    for(let i = 0;i<t.length;i++)
    {
        r.set(t[i],r.get(t[i])+1 || 1 )
    }
    for (let key of p.keys()) {
    if (p.get(key) !== r.get(key)) {
        return false;
    }
}

    return true
};