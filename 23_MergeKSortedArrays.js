/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */


var mergeKLists = function (lists) {

    //since min possible value is -10000
    let head = new ListNode(-10001, null);

    for (let i = 0; i < lists.length; i++) {
        head = recursiveComparator(head, lists[i]);
    }

    return head.next;
};




function recursiveComparator(list1, list2) {

    if (list1 == null)
        return list2;
    if (list2 == null)
        return list1;

    if (list1.val < list2.val) {
        list1.next = recursiveComparator(list1.next, list2);
        return list1;
    } else {
        list2.next = recursiveComparator(list1, list2.next);
        return list2;
    }
}