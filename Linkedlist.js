class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    let tempNode = this.head;
    if (tempNode === null)
      this.insertFirst(item);
    else {
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null)
    }
  }

  find(item) {
    let currentNode = this.head;

    if (!currentNode)
      return null;

    while (currentNode.value !== item) {
      if (currentNode.next === null)
        return null;
      else
        currentNode = currentNode.next;
    }
    return currentNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if(this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let previousNode = this.head;

    while ((currentNode !== null) && (currentNode.value !== item)) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      return 'Item not found';
    }
    previousNode.next = currentNode.next;
  }
}