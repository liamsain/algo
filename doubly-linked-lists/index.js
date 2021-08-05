class DoublyLinkedList{
  constructor(first = null, last = null) {
    this.first = first;
    this.last = last;
  }

  insertAtEnd(data) {
    const node = { data };
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.previous = this.last;
      this.last.next = node;
      this.last = node;
    }
  }
  removeFromStart() {
    const removedNode = this.first;
    this.first = this.first.next;
    this.first.previous = null;
    return removedNode;
  }
  printDataFromEndToStart() {
    let node = this.last;
    while(true) {
      if (node) {
        console.log(node.data);
        node = node.previous;
      } else {
        break;
      }
    }
  }

}

const list = new DoublyLinkedList();
list.insertAtEnd('hi');
list.insertAtEnd('there');
list.insertAtEnd('!');
list.printDataFromEndToStart();
// doubly linked lists are O(1) for deleting and inserting data
// at the start or end of the list
// This makes them better for implementing queues than arrays
// since arrays take O(N) to delete from the beginning
// remember: with qs you add to the end and take from the start
//
//
class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
  }
  append(data) {
    this.list.insertAtEnd(data);
  }
  removeFirstItem() {
    return this.list.removeFromStart();
  }
  read() {
    return this.list.first;
  }
}
