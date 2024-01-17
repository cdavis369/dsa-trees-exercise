/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    return this.sumValuesHelper(this.root);
  }
  sumValuesHelper(node) {
    let sum;
    if (node) {
      sum = node.val;
      for (const child of node.children) {
        sum += this.sumValuesHelper(child);
      }
    } else return 0;
    
    return sum;
  }
  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    return this.countEvensHelper(this.root);
  }

  countEvensHelper(node) {
    let evenCount = 0;
    if (node) {
      if (node.val % 2 === 0) {
        evenCount++;
      }
      for (const child of node.children) {
          evenCount += this.countEvensHelper(child);
      } 

    } else return 0;

    return evenCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    return this.numGreaterHelper(lowerBound, this.root);
  }

  numGreaterHelper(lowerBound, node) {
    let greaterCount = 0;
    if (node) {
      if (node.val > lowerBound) {
        greaterCount++;
      }
      for (const child of node.children) {
        greaterCount += this.numGreaterHelper(lowerBound, child);
      }
    } else return 0;
    return greaterCount;
  }
}

module.exports = { Tree, TreeNode };
