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
        return 'Item does not exist';
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

  insertBefore(item, key) {
    if (!this.head)
      return this.insertFirst(item);

    if (this.head.value === key)
      return this.insertFirst(item);

    let currentNode = this.head;
    let previousNode = this.head;

    while ((currentNode.value !== key) && (currentNode !== null)) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      return 'Key not found';
    } else {
      let newNode = new _Node(item, previousNode.next);
      previousNode.next = newNode;
    }
  }

  insertAfter(item, key) {
    if (!this.head)
      return this.insertFirst(item);

    let currentNode = this.head;

    while ((currentNode.value !== key) && (currentNode !== null)) {
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      return 'Key not found';
    } else {
      let newNode = new _Node(item, currentNode.next);
      currentNode.next = newNode;
    }
  }

  insertAt(item, index) {
    if (index < 0)
      return 'Please choose a positive index';

    if (!this.head)
      return this.insertFirst(item);

    if (this.head.value === index -1)
      return this.insertFirst(item);

    let counter = 0;
    let currentNode = this.head;
    let previousNode = this.head;

    while ((counter !== index -1) && (currentNode !== null)) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }
    if (currentNode === null) {
      return 'Index does not exist';
    } else {
      let newNode = new _Node(item, previousNode.next);
      previousNode.next = newNode;
    }
  }
}

const main = () => {
  const SLL = new LinkedList();

  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  SLL.insertLast('Tauhida');

  // SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');

  return SLL;
};

const display = () => {
  let llDisplay = JSON.stringify(main());
  console.log(llDisplay);
};

const size = () => {

};

display();