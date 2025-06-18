//leetcode = 234

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = []
    let curr = head;

    while(curr)
    {
        arr.push(curr.val)
        curr = curr.next;
    }
    console.log(arr)
    let i
    let j
    for(i = 0, j=arr.length-1;i<=j;i++,j--)
    {
        if(arr[i] != arr[j])
            return false
    }
    return true
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let slow = head;
    let fast = head;

    // find mid

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse 2nd half

    let prev = null
    let curr = slow;

    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next
    }

    /// check palindrome

    let first = head;
    let second = prev

    while (second) {
        if (first.val != second.val) {
            return false
        }
        first = first.next;
        second = second.next
    }

    return true;

};   