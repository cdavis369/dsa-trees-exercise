/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
    
  }
  
  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    return this.minDepthHelper(this.root);
  }

  minDepthHelper(node) {
    if (node) {
      return 1 + Math.min(this.minDepthHelper(node.left), this.minDepthHelper(node.right));
    } else return 0;
  }
  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    return this.maxDepthHelper(this.root);
  }

  maxDepthHelper(node) {
    if (node) {
      return 1 + Math.max(this.maxDepthHelper(node.left), this.maxDepthHelper(node.right))
    } else return 0;
  }

  maxSum() {
    let result = {val: 0};
    this.recursiveMaxSum(this.root, result);
    return result.val;
  }

 recursiveMaxSum(node, result) {
    if (!node) return 0;

    const maxLeft = this.recursiveMaxSum(node.left, result);
    const maxRight = this.recursiveMaxSum(node.right, result);
    const maxBranch = Math.max(0, maxLeft, maxRight) + node.val;

    result.val = Math.max(result.val, maxBranch, maxLeft + maxRight + node.val);

    return maxBranch;
  }

  nextLarger(lowerBound) {
    let node = this.root;
    let nextVal = null;
    let stack = [];

    while (node || stack.length > 0) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();

        if (nextVal === null || (node.val > lowerBound && (node.val < nextVal || nextVal <= lowerBound))) {
            nextVal = node.val;
        }
        node = node.right;
    }

  if (lowerBound > nextVal) return null;

  return nextVal;
 }


  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
