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
var middleNode = function (head) {
    let curr = head
    let pcurr = head
    let cnt = 0;

    while (curr.next != null) {
        curr = curr.next;
        cnt++;
    }
    let mid
    console.log(cnt)
    if (cnt % 2 != 0) {
        mid = Math.floor(cnt / 2) + 1
        console.log(mid)
    }
    else { mid = Math.floor(cnt / 2) }

    for (let i = 0; i < mid; i++) {
        pcurr = pcurr.next
    }
    return pcurr
};



// using two pointer : leet code : 876