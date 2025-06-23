/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//leetcode = 21
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    let ans = new ListNode()
    let curr = ans;
    while(l1 && l2)
    {
        if(l1.val > l2.val)
        {
            ans.next = l2;
            l2 = l2.next
            ans = ans.next
        }
        else
        {
            ans.next = l1;
            l1 = l1.next
            ans = ans.next
        }
    }
    ans.next = l1 || l2
    return curr.next
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let curr;
    if(!l1) return l2;
    if(!l2) return l1;
    if(l1.val > l2.val)
    {
        curr = l2;
        l2 = l2.next
    }
    else
    {
        curr = l1;
        l1 = l1.next;
    }
    let start = curr;
    while(l1 && l2)
    {
        if(l1.val < l2.val)
        {
            curr.next = l1;
            l1 = l1.next
        }
        else
        {
            curr.next = l2;
            l2 = l2.next
        }
        curr = curr.next;
    }
    if(!l1)
    {
        curr.next = l2
    }
    else
    {
        curr.next = l1;
    }
    return start
};