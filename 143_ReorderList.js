/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @  {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {

    let tmp = head;
    let half = head, end = head;
    while (end && end.next != null) {
        half = half.next;
        end = end.next.next;
    }

    let reversedHalf = reverseList(half);
    let out = head;

    while (head.next != null && reversedHalf.next != null && head != reversedHalf.next) {
        let temp1 = head.next;
        let temp2 = reversedHalf.next;
        head.next = reversedHalf;
        reversedHalf.next = temp1;
        head = temp1;
        reversedHalf = temp2;
    }

    return out;
};

function reverseList(head) {

    if (head == null || head.next == null)
        return head;

    let tmp = head;
    let reversedList = reverseList(head.next);
    head.next.next = head;
    head.next = null

    return reversedList;
}

