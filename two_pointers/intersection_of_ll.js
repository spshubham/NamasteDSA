/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
//leetcode = 160
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    // Step 1: Calculate lengths
    let lenA = 0, lenB = 0;
    let currA = headA, currB = headB;

    while (currA) {
        lenA++;
        currA = currA.next;
    }
    while (currB) {
        lenB++;
        currB = currB.next;
    }

    // Step 2: Align both lists
    currA = headA;
    currB = headB;

    if (lenA > lenB) {
        let diff = lenA - lenB;
        while (diff--) currA = currA.next;
    } else {
        let diff = lenB - lenA;
        while (diff--) currB = currB.next;
    }

    // Step 3: Move together until intersection
    while (currA !== currB) {
        currA = currA.next;
        currB = currB.next;
    }

    return currA; // Either intersection node or null
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let pA = headA;
    let pB = headB;

    // Traverse until they meet or both are null
    while (pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }

    return pA; // Either the intersection node or null
};
