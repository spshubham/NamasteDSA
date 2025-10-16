//leetcode = 104

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
 * @return {number}
 */
var maxDepth = function(root) {
    
    let maxD = 0
    if(!root) return 0
    function trav(curr, dept)
    {
        maxD = Math.max(maxD,dept)
        curr.left && trav(curr.left,dept+1)
        curr.right && trav(curr.right,dept+1)
    }
    trav(root,1)
    return maxD
};



var maxDepth = function(root) {
    if(!root) return 0;
    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);
    return 1 + Math.max(leftMax, rightMax);
};  

