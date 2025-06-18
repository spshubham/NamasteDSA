//leetcode = 203
var removeElements = function(head, val) {
    let dummy = new ListNode(-1); // dummy node before head
    dummy.next = head;
    let curr = head;
    let prev = dummy;

    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next; // skip current node
        } else {
            prev = curr; // move prev only if node not deleted
        }
        curr = curr.next;
    }

    return dummy.next; // updated head
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = new ListNode()
    dummy.next = head

    let prev = dummy;

    while(prev && prev.next)
    {
        if(prev.next.val == val)
        {
            prev.next = prev.next.next
        }
        else
        {
            prev = prev.next;
        }
    }
    return dummy.next;
};