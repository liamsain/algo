class TreeNode {
  constructor(config) {
    this.value = config.value;
    this.left = config.left;
    this.right = config.right;
  }
}
// a good exercise would be an alg that builds a binary search tree from an array
const node1 = new TreeNode({value: 20});
const node2 = new TreeNode({value: 30});
const root = new TreeNode({value: 25, left: node1, right: node2});
