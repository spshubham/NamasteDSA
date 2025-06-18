//leetcode : 141

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let curr = head;
    let map = new Set();
    while(curr)
    {
        if(!map.has(curr))
        {
            map.add(curr)
        }
        else{
            return true
        }
        curr = curr.next;
    }
    return false
};


//floyeds algo, fast ptr and slow ptr
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    if(head == null)   
        return false
    let slow = head;
    let fast = head.next

    while(slow != fast)
    {
        if(fast == null || fast.next == null)
            return false

        slow = slow.next;
        fast = fast.next.next;   
    }
    return true;

};