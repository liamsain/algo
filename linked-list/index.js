const node1 = {
  data: 'hi'
};
const node2 = {
  data: 'there'
};
const node3 = {
  data: 'how'
};
const node4 = {
  data: 'are'
}
const node5 = {
  data: 'you'
}
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


class LinkedList {
  constructor(firstNode) {
    this.firstNode = firstNode;
  }
  findByIndex(i) {
    let currentIndex = 0;
    let currentNode = this.firstNode;
    while (currentIndex < i) {
      currentNode = currentNode.next;
      if (!currentNode) {
        break;
      }
      currentIndex += 1;
    }
    return currentNode;
  }
  getIndexByVal(val) {
    let currentNode = this.firstNode;
    let result = -1;
    let currentIndex = 0;
    while(true) {
      if (currentNode.data === val) {
        result = currentIndex;
        break;
      }
      currentIndex += 1;
      currentNode = currentNode.next;
      if (!currentNode) {
        break;
      }
    }
    return result;
  }
  insertAtIndex(data, index) {
    const node = { data };
    if (index === 0) {
      node.next = this.firstNode;
      this.firstNode = node;
      return this.firstNode;
    } else {
      const previousNode = this.findByIndex(index - 1);
      if (previousNode) { 
        node.next = previousNode.next;
        previousNode.next = node;
        return node;
      } else {
        return undefined;
      }
    }
  }
  deleteByIndex(index) {
    if (index === 0) {
      this.firstNode = this.firstNode.next;
    } else {
      const precedingNode = this.findByIndex(index - 1);
      const nodeToDelete = precedingNode.next;
      const followingNode = nodeToDelete.next;
      precedingNode.next = followingNode;
    }
  }
  printAllItems() {
    let node = this.firstNode;
    while(true) {
      if (node) {
        console.log(node.data);
        node = node.next;
      } else {
        break;
      }
    }
  }
  getLastItem() {
    let node = this.firstNode;
    while(true) {
      const nextNode = node.next;
      if (nextNode) {
        node = nextNode;
      } else {
        break;
      }
    }
    return node;
  }
  reverseList() {
    let first = this.firstNode;
    let second = first.next;
    first.next = null;
    while(true) {
      let newNext = second.next;
      second.next = first;
      first = second;
      second = newNext;
      if (!newNext) {
        this.firstNode = first;
        break;
      }
    }
  }
  deleteNode(node) {
    const next = node.next;
    node.data = next.data;
    node.next = next.next;
  }

};
const list = new LinkedList(node1);
list.printAllItems();

/*
list.printAllItems();
list.insertAtIndex('asdf', 2);
console.log(list.findByIndex(0));
console.log(list.findByIndex(1));
console.log(list.findByIndex(2));
console.log(list.findByIndex(3));
console.log(list.findByIndex(4));
*/

// the advantage of linked lists is that 
// you can go through it from the beginning
// inserting and deleting
// and after each insertion or deletion
// you don't have to worry about shifting everything to the right of it
// like you would with arrays
