'use strict';

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      let current = this.head;
    
      while(current.next !== null){
        current = current.next;
      }
      current.next = new _Node(item, null);
    }
  }

  insertBefore(match, newValue){
    if (!this.head) {
      return null;
    }

    if(this.head.value === match){
      this.insertFirst(newValue);
      return;
    }

    let current = this.head;
    let previous = this.head;


    while(current !== null){

      if(current.value === match){
        previous.next = new _Node(newValue, current);
        return;
      }
      previous = current;
      current = current.next;
    }

    console.log('Item to insert before was not found');
    return;
  }

  insertAfter(match, newValue){
    if (!this.head) {
      return null;
    }

    let current = this.head;

    while (current !== null) {
      if (current.value === match) {
        const tempNext = current.next;
        current.next = new _Node(newValue, tempNext);
        return;
      }
      current = current.next;
    }

    console.log('Item to insert after was not found');
    return;     
  }

  insertAt(position, newValue){
    if(!this.head){
      return null;
    }

    if (position === 0) {
      this.insertFirst(newValue);
      return;
    }

    let counter = 0;
    let current = this.head;
    let previous = this.head;

    while(current !== null){
      if(counter === position){
        previous.next = new _Node(newValue, current);
        return;
      }
      previous = current;
      current = current.next;
      counter++;
    }
    console.log('Position was invalid');
    return; 
  }

  find(item){
    let current = this.head;
    
    if(!this.head){
      return null;
    }

    while (current.next !== null) {

      if (current.value === item) {
        return current;
      }
      current = current.next;
    }
    return null;
  } 

  remove(item){
    if(!this.head){
      return null;
    }

    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous = this.head;

    while(current !== null){

      if (current.value === item){
        previous.next = current.next;
        return;
      }

      previous = current;
      current = current.next;
    }

    console.log('Item not found');
    return;
  }

  printList(){
    if(!this.head){
      return null;
    }
    let current = this.head;
    while (current !== null){
      console.log(current.value);
      current = current.next;
    }
    return;
  }

}

class _Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

function display(linkedList){
  if (!linkedList.head) {
    return null;
  }
  const list =[];

  let current = linkedList.head;
  while (current !== null) {
    list.push(current.value);
    current = current.next;
  }
  console.log(list);
  return;
}




const names = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];

function main(items){

  const SLL = new LinkedList();
  items.forEach(item => SLL.insertFirst(item));
  SLL.insertFirst('Tauhida');
  // console.log('head before remove', this.head);
  // SLL.remove('squirrel');
  // SLL.insertBefore('Starbuck', 'Vernon');
  // SLL.insertAfter('Tauhida', 'Scott');
  // SLL.insertBefore('Tauhida', 'Samantha');
  // SLL.insertFirst('Apollo');
  // SLL.insertAt(1, 'Casey');
  // SLL.insertAfter('Apollo', 'Casey');
  // SLL.insertBefore('Boomer', 'Athena');
  SLL.insertAfter('Helo', 'Hotdog');
  SLL.insertAt(3, 'Kat');
  SLL.remove('Tauhida');
  // SLL.printList();
  display(SLL);
  return;
}

main(names);