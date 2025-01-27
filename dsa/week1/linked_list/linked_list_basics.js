class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  addLast(value) {
    if (!value) {
      throw new Error("Please enter a valid input");
    }
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;

      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  addAt(index, data) {
    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let prev = null;
    let current = this.head;
    let currentIdx = 0;
    while (current && currentIdx < index) {
      prev = current;
      current = current.next;
      currentIdx++;
    }
    if (currentIdx != index) {
      throw new Error("index not bound");
    }
    prev.next = newNode;
    newNode.next = current;
  }
  deleteAt(index) {
    if (index == 0) {
      this.head = this.head.next;
      return;
    }
    let currentIdx = 1;
    let prev = this.head;
    let current = this.head.next;
    while (current) {
      if (currentIdx == index) {
        prev.next = current.next;
        return;
      }
      currentIdx++;
      prev = current;
      current = current.next;
    }
  }
  deleteMiddle() {
    if (!this.head) {
      throw new Error("List is empty");
    }
    let slow = this.head;
    let fast = this.head;
    let prev = null;
    while (fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    prev.next = slow.next;
  }
  display() {
    let current = this.head;
    let ll = "";
    while (current) {
      ll += current.val + " ";
      current = current.next;
    }
    console.log(ll);
  }
}
const LL = new LinkedList();
LL.addFirst(2);
LL.addFirst(4);
LL.addFirst(6);
LL.addLast(8);
LL.display();
