/**
 * @param {string} s
 * @return {string}
 */

//leetcode = 1021
var removeOuterParentheses = function(s) {
    let res = '';
    let count = 0;

    for (let ch of s) {
        if (ch === '(') {
            if (count > 0) res += ch;
            count++;
        } else if (ch === ')') {
            count--;
            if (count > 0) res += ch;
        }
    }

    return res;
};


/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let st = [];
    let ans = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            st.push(s[i])
            let n = st.length
            if (n > 1)
                ans = ans + s[i]
        }
        else {
            let n = st.length
            if (n > 1)
                ans = ans + s[i]
            st.pop();
        }

    }
    return ans;
};