/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */

var createBinaryTree = function (descriptions) {

    let obj = {}, n = descriptions.length;

    for (let i = 0; i < n; i++) {

        let node = obj[descriptions[i][0]] ? obj[descriptions[i][0]] : new TreeNode(descriptions[i][0]);

        if (descriptions[i][2] == 1) node.left = new TreeNode(descriptions[i][1]);
        else node.right = new TreeNode(descriptions[i][1]);

        obj[node.val] = node;
    }


    let parents = Object.keys(obj);
    let set = new Set(parents);

    for (let i = 0; i < parents.length; i++) {
        let temp = parents[i];
        let node = obj[temp];

        if (node.left && obj[node.left.val]) {
            node.left = obj[node.left.val];
            set.delete(node.left.val + '');
        }

        if (node.right && obj[node.right.val]) {
            node.right = obj[node.right.val];
            set.delete(node.right.val + '');
        }
    }



    let rootVal = [...set][0];
    return obj[rootVal];

};

