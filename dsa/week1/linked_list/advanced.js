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
    mergeSortedList(list1,list2){
        if(!list1) return list2
        if(!list2) return list1
        if(list1.val<list2.val){
            list1.next=this.mergeSortedList(list1.next,list2);
            return list1
        }else{
            list2.next=this.mergeSortedList(list1,list2.next);
            return list2
        }
    }
    checkPalindrome(){
        
    }
}
    const ll = new LinkedList();
ll.addLast(1);
ll.addLast(4);
ll.addLast(6);