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
 * 
 * // two pass approach, first we traverse for length and second to reach position to delete
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

// one pass approach

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    dummy.next = head;
    //move first pointer ahead by n
    let first = dummy;

    for(let i = 0;i<n;i++)
    {
        first = first.next
    }
    let second = dummy;

    //move both pttr till first reaches last and 
    while(first && first.next)
    {
        second = second.next;
        first = first.next;
    }
    //delete second.next;
    second.next = second.next.next;
    return dummy.next

};