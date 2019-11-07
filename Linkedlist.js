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
  let counter = 1;
  let currentNode = main().head.next;

  if (!currentNode) {
    return 0;
  }

  while (currentNode !== null) {
    counter++;
    currentNode = currentNode.next;
  }
  return counter;
};

const isEmpty = () => {
  let currentNode = main().head;
  if (!currentNode) {
    return true;
  }
  return false;
};

const findPrevious = (item) => {
  let currentNode = main().head;
  let previousNode = main().head;

  if (currentNode.value === item)
    return 'The first node has the item.';

  while (currentNode.value !== item && currentNode !== null) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }

  if (currentNode === null) 
    return 'Key not found';
  else 
    return previousNode;
};

const findLast = () => {
  let currentNode = main().head;

  if (!currentNode) {
    return 'List does not exist';
  }

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

display();
console.log(size());
console.log(isEmpty());
console.log(findPrevious('Athena'));
console.log(findLast());

// 4. O(n^2); This function searches for the same value as the current head and removes it.

// 5.

const reverseLinkedList = (linkedList) => {
  const reversedList = new LinkedList();

  let currentNode = linkedList.head;

  while (currentNode !== null) {
    reversedList.insertFirst(currentNode.value);
    currentNode = currentNode.next;
  }

  return JSON.stringify(reversedList);
};

console.log(reverseLinkedList(main()));

// 6.

const thirdFromEnd = (linkedList) => {
  let currentNode = linkedList.head;

  if (!currentNode)
    return null;

  if (currentNode.next.next === null)
    return 'Linked List isn\'t long enough';

  while (currentNode.next.next.next !== null) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

console.log(thirdFromEnd(main()));

// 7.

const middleNode = (linkedList) => {
  let slowPtr = linkedList.head;
  let fastPtr = linkedList.head;

  if (!linkedList)
    return null;

  while (fastPtr !== null && fastPtr.next !== null) {
    fastPtr = fastPtr.next.next;
    slowPtr = slowPtr.next;
  }
  return slowPtr;
};

console.log(middleNode(main()));

// 8.

const cycleList = () => {

};