//leetcode : 160
var getIntersectionNode = function (headA, headB) {
    let map = new Map();
    let currA = headA;

    // Store all nodes of list A in the map
    while (currA) {
        map.set(currA, true); // store node reference as key
        currA = currA.next;
    }

    let currB = headB;

    // Traverse list B and check if any node exists in the map
    while (currB) {
        if (map.has(currB)) {
            return currB; // intersection node
        }
        currB = currB.next;
    }

    return null; // no intersection
};
