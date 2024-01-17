/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */


var kthSmallest = function (root, k) {

    if (root == null)
        return 0;

    let depth = findDepth(root.left);

    if (depth >= k)
        return kthSmallest(root.left, k);
    else if (depth < k - 1) {
        return kthSmallest(root.right, k - 1 - depth);
    }


    return root.val;
};


function findDepth(root) {

    if (root == null)
        return 0;

    return findDepth(root.left) + findDepth(root.right) + 1;
}


function findK(root, k) {

    if (root == null)
        return;

    k = findK(root.left, k);
    stack.push(root.val);
    k = findK(root.right, k);
    return;
}