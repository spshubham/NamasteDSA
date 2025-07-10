//leetcode = 150

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(t) {
    // if(t.length == 1) {
    //     console.log(111111)
    //     return t
    // }
    let s = [];
    
    for(let i = 0;i<t.length;i++)
    {
        if(t[i] == "+")
        {
            let o1 = Number(s.pop());
            let o2 = Number(s.pop());
            let ans = (o2+o1)
            s.push(ans)
        }
        else if(t[i] == "-")
        {
            let o1 = Number(s.pop());
            let o2 = Number(s.pop());
            let ans = (o2-o1)
            s.push(ans)
        }
        else if(t[i] == "*")
        {
            let o1 = Number(s.pop());
            let o2 = Number(s.pop());
            let ans = (o2*o1)
            s.push(ans)
        }
        else if(t[i] == "/")
        {
            let o1 = Number(s.pop());
            let o2 = Number(s.pop());
            let ans = Math.trunc(o2/o1)
            console.log(ans)
            s.push(ans)
        }
        else
        {
            //console.log(t[i])
            s.push(t[i])
        }
    }
    console.log(s)
    return Number(s[0])
};