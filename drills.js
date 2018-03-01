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

    if(this.head === item){
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


}

class _Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

const names = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];

function main(items){

  const SLL = new LinkedList();
  items.forEach(item => SLL.insertFirst(item));
  SLL.insertFirst('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Starbuck', 'Vernon');
  SLL.insertAfter('Tauhida', 'Scott');
  return SLL;
}

console.log(main(names));