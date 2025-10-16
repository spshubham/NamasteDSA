//leetcode 102

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    if(!root) return []
    let q = [root]

    let ans = []

    while(q.length)
    {
        let lvl_arr = [];
        let q_size = q.length;

        for(let i = 0;i<q_size;i++)
        {
            let curr = q.shift();
            curr.left && q.push(curr.left)
            curr.right && q.push(curr.right)
            lvl_arr.push(curr.val)
            console.log(curr.val)
        }
        ans.push(lvl_arr)
    }
    return ans;
};


//recursive

var levelOrder = function(root) {
    if(!root) return [];
    let ans = [];
    let traversal = (curr, level) => {
        if(!ans[level]) ans[level] = [];
        ans[level].push(curr.val);
        curr.left && traversal(curr.left, level + 1);
        curr.right && traversal(curr.right, level + 1);
    }
    traversal(root, 0);
    return ans;
};