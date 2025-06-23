/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//leetcode = 83 my sol
var deleteDuplicates = function(head) {
    
    let curr = head;
    let unq = new Set();
    let prev = null;
    while(curr)
    {
        if(unq.has(curr.val))
        {
            prev.next = curr.next;
            curr = curr.next
        }
        else
        {
            unq.add(curr.val)
            prev = curr;
            curr = curr.next;

        }
    }
    return head;
};

// optimized

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
    let curr = head;

    while(curr && curr.next)
    {
        if(curr.val == curr.next.val)
        {
            curr.next = curr.next.next
        }
        else
        {
            curr = curr.next
        }
    }
    return head;
};