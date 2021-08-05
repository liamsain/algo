class TreeNode {
  constructor(config) {
    this.value = config.value;
    this.left = config.left;
    this.right = config.right;
  }
}
const node1 = new TreeNode({value: 20});
const node2 = new TreeNode({value: 30});
const root = new TreeNode({value: 25, left: node1, right: node2});


function searchForVal(val, node) {
  if (!node || node.value === val) {
    return node;
  } else if (val < node.value) {
    return searchForVal(val, node.left);
  } else {
    return searchForVal(val, node.right);
  }
}

const a = searchForVal(11, root);
console.log(a);

function insertNode(val, node) {
  if (val < node.value) {
    if (!node.left) {
      node.left = new TreeNode({value: val});
    } else {
      insertNode(val, node.left);
    }
  } else if (val > node.value) {
    if (!node.right) {
      node.right = new TreeNode({value: val});
    } else {
      insertNode(val, node.right);
    }
  }
}
insertNode(50, root);
insertNode(10, root);
console.log(root);
