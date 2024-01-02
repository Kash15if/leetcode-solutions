/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */



var mergeTwoLists = function (list1, list2) {

    return recursion(list1, list2);
};


function recursion(list1, list2) {

    if (list1 == null)
        return list2;
    if (list2 == null)
        return list1;

    if (list1.val < list2.val) {
        list1.next = recursion(list1.next, list2);
        return list1;
    } else {
        list2.next = recursion(list1, list2.next);
        return list2;
    }
}


function mergerWithout3rdList(list1, list2) {


    let out = list1;

    while (list1 != null || list2 != null) {

        if (list1 && list1.val <= list2.val) {
            list1 = list1.next;
        }
        else {

            let temp1 = list2;
            let temp2 = list1.next;
            list2 = list2.next;

            list1.next = temp1;
            list1.next.next = temp2;
        }

    }


    // if(list1 == null)
    //     head.next = list2;
    // if(list2 == null)
    //     head.next = list1;

    return out.next;

}





function mergerUsing3rdList(list1, list2) {
    let head = new ListNode(0, null);
    let out = head;

    while (list1 != null && list2 != null) {

        if (list1.val < list2.val) {
            head.next = list1;
            list1 = list1.next;
        }
        else {
            head.next = list2;
            list2 = list2.next
        }

        head = head.next;
    }


    if (list1 == null)
        head.next = list2;
    if (list2 == null)
        head.next = list1;

    return out.next;

}

