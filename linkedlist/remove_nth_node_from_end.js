/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * leet code : 19
 * 
 * whnever delete alwas consider with dummy node;
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    dummy.next = head;
    let len = 0;
    while(head)
    {
        head = head.next;
        len++;
    }
    let pos = len -n;
    let prev = dummy

    for(let i = 0;i<pos;i++)
    {
        prev = prev.next;
    }
    prev.next = prev.next.next;

    return dummy.next;
};