//leetcode = 20

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let st = [];
    let map = {
        ")" : "(",
        "]" : "[",
        "}" : "{",
    }
    for(let i = 0;i<s.length;i++)
    {
        if(s[i] == ")" || s[i] == "}" || s[i] == "]")
        {
            if(st.pop() != map[s[i]])
                return false
        }
        else
        {
            st.push(s[i])
        }
    }
    return st.length == 0;
};