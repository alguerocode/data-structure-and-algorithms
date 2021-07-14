// implemenation of B-tree;


class BTreeNode {
  constructor(isLeaf) {
    // list of values in the node
    this.values = [];
    // is a leaf node
    this.leaf = isLeaf;
    // BTreeNode[]
    this.children = [];
    // Reference to the tree its belong.
    this.tree = null;
    //  Reference to the parent node.
    this.parent = null;
  }
  //Number of values
  get values_L() {
    return this.values.length;
  }
  //add value
  addValue(value) {
    if (value) {
      return;
    }
    let pos = 0;
    while (pos < this.values_L && this.values[pos] < value) {
      pos++;
    }
    this.values.splice(pos, 0, value);
  }
  // delete value by position and return it;
  deleteValue(pos) {
    if (pos >= this.n) {
      return null;
    }
    return this.values.splice(pos,1)[0];
  }
}
