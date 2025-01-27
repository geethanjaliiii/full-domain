class Node {
  constructor(data) {
    this.val = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addLast(data) {
    const newNode = new Node(data);
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

  display(current=this.head) {
   // let current = this.head;
    let list = "";
    while (current) {
      list += current.val + "->";
      current = current.next;
    }
    console.log(list);
  }
  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      let next = current.next;
      current.next = prev;
      //move prev and current forward
      prev = current;

      current = next;
    }
  this.display(prev)
  }
  removeEven() {
  while(this.head && this.head.val%2==0){
    this.head=this.head.next;
  }
  let current=this.head
    while (current && current.next) {
      if (current.next.val % 2 == 0) {
        current.next=current.next.next
      }else{
        current=current.next
      }

    }
  }
  mergeLinkedList(node1, node2) {
    if (!node1) return node2;
    if (!node2) return node1;
    let current = node1;

    while (current.next) {
      current = current.next;
    }
    current.next = node2;
   return node1;
  }
  [1,2,3,2]
  removeDuplicatesFromSorted(){
    let current=this.head;
    while(current && current.next){
        if(current.val===current.next.val){
            current.next=current.next.next
        }else{
            current=current.next
        }
    }
  }
}
const ll = new LinkedList();
ll.addLast(1);
ll.addLast(4);
ll.addLast(6);
const ll2=new LinkedList()
ll2.addLast(2)
ll2.addLast(3)
ll2.addLast(5)
ll.display();
ll.reverse()

ll.mergeLinkedList(ll.head, ll2.head)

ll.display();

// 1. Initialization:
// Start with prev = null (because the reversed list starts with null).
// current = head (points to the first node, which is 1 in this case).

// prev   current
// null    1 -> 2 -> 3 -> 4 -> null
// 2. Process Each Node:
// Step 1: Save current.next
// We save current.next in a variable next. This ensures we don't lose the rest of the list.

// next = current.next
// At the start:

// prev   current    next
// null    1  ->    2 -> 3 -> 4 -> null
// Step 2: Reverse the Link
// Make current.next point to prev, effectively reversing the direction of the link.

// current.next = prev

// null <- 1    2 -> 3 -> 4 -> null
// prev   current    next
// Step 3: Move prev and current Forward
// Move both pointers forward:

// prev = current (the current node becomes the new prev).
// current = next (move to the next node in the original list).
// makefile

// prev = 1
// current = 2
// The list now looks like this:

// null <- 1    2 -> 3 -> 4 -> null
//        prev   current
// 3. Repeat Until current is null:
// Continue processing each node until current becomes null:

// Iteration 2:

// prev   current    next
//  1 <-   2  ->    3 -> 4 -> null
// After reversing the link:

// null <- 1 <- 2    3 -> 4 -> null
//              prev   current
// Iteration 3:

// prev   current    next
//  2 <-   3  ->    4 -> null
// After reversing the link:

// null <- 1 <- 2 <- 3    4 -> null
//                    prev   current
// Iteration 4:

// prev   current    next
//  3 <-   4  ->    null
// After reversing the link:

// null <- 1 <- 2 <- 3 <- 4
//                          prev   current
// 4. Final Step: Return prev
// When current becomes null, the prev pointer will point to the new head of the reversed list:

// rust
// Copy
// 4 -> 3 -> 2 -> 1 -> null
