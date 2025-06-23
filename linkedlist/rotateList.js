/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    
    if(!head || !head.next) return head

    let n = 0

    let curr = head;

    while(curr) //length find
    {
        curr = curr.next;
        n++
    }
    k = k% n // find the mod for eg if k = 12, k%n == 12%5 = 2 nothing but k = 2, so 12 and 2 are same
    let s = head;
    let f = head;
    for(let i =0;i<k;i++)
    {
        f=f.next;
    }
    while(f.next)
    {
        s = s.next;
        f = f.next;
    }

    f.next = head;
    let newHead = s.next;
    s.next = null;
    return newHead;
};