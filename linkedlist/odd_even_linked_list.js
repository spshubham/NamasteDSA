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

//leetcode : 328
var oddEvenList = function(head) {

    if(!head)   return null
    let slow = head;
    let fast = head.next;
    let prev = head.next;

    while(slow.next && fast.next)
    {
        slow.next = fast.next;
        slow = slow.next
        fast.next = slow.next;
        fast = fast.next
    }
    slow.next = prev;
    return head
};

//another apporach

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
var oddEvenList = function(head) {

    if(!head)   return null
    let slow = head;
    let fast = head.next;
    let prev = head.next;

    while(slow.next && fast.next)
    {
        slow.next = slow.next.next;
        slow = slow.next
        fast.next = fast.next.next;
        fast = fast.next
    }
    slow.next = prev;
    return head
};