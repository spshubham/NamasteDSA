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
//iterative approach
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    
    let dummy = new ListNode();
    dummy.next = head;

    let p = dummy;
    let c = head;
    let n = head.next

    while(c && n)
    {
        p.next = n;
        c.next = n.next;
        n.next = c;

        p =c;
        c = p && p.next;
        n = c && c.next
    }
    return dummy.next
};


// recursive approach

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
var swapPairs = function(head) {

    if(!head || !head.next) return head;
    
    let l = head;
    let r = head.next;

    l.next = swapPairs(r.next)
    r.next = l;

    return r;

};