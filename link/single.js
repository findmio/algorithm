class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  findLast() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  append(element) {
    const newNode = new Node(element);
    if (!this.size) { // 链表为空
      this.head = newNode;
    } else {
      const lastNode = this.findLast();
      lastNode.next = newNode;
    }
    this.size++;
  }
}

const link = new LinkedList();

[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(item => {
  link.append(item);
})

function reverse(link) {
  let currentNode = link.head;
  let prevNode = null;
  while (currentNode) {
    const nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  return prevNode;
}

console.log(reverse(link));

