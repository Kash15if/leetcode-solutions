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


var reverseList = function (head) {

    if (head == null || head.next == null) return head;

    let prev = null;

    while (head != null) {
        let nxt = head.next;
        head.next = prev;
        prev = head
        head = nxt;
    }
    return prev;
}








