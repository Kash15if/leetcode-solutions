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
var removeNthFromEnd = function (head, n) {

    // return removeUsingCount(head, n);

    let ct = removeUsingRecursion(head, n, 0)
    if (ct == n) {
        head = head.next
    }
    return head;
};



function removeUsingRecursion(head, n, i) {

    if (head.next == null)
        return 1;

    let ct = 1 + removeUsingRecursion(head.next, n, i + 1);

    if (ct === n + 1)
        head.next = head.next.next;

    return ct;
}

function removeUsingCount(head, n) {
    let total = 0;
    let tmp = head;

    while (tmp != null) {
        total++;
        tmp = tmp.next;
    }
    let tmp2 = head;

    if (total == n) {
        head = head.next
        return head;
    }
    else {
        total -= n + 1;
        while (tmp2.next != null) {
            if (total == 0) {
                tmp2.next = tmp2.next.next;
                break;
            }
            total--;
            tmp2 = tmp2.next;
        }
    }
    return head;
}

