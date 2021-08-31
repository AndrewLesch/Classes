class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  // Append метод принимает значение в качестве аргумента и создаёт новый узел с этим значением, помещая его в конец связного списка.
  append(value) {
    // Создаём новый узел.
    const newNode = new DoublyLinkedListNode(value);
  
    if (this.tail) {
      // Присоединяем новый узел к концу связного списка.
      this.tail.next = newNode;
    }
  
    // В новом узле указываем ссылку на предыдущий (previous) элемент на this.tail,
    // так как новый узел будет теперь последним.
    newNode.previous = this.tail;
  
    // Переназначаем tail на новый узел.
    this.tail = newNode;
  
    // Если ещё нет head, делаем новый узел head.
    if (!this.head) {
      this.head = newNode;
    }
  }

  toArray() {
    const nodes = [];
  
    let currentNode = this.head;
  
    // Перебираем все узлы и добавляем в массив.
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
  
    // Возвращаем массив из всех узлов.
    return nodes;
  }
}

const list = new DoublyLinkedList();
list.append({name: 'Oleg', facalty : 'fre',});
list.append({name: 'Evg', facalty : 'ksis',});
list.append({name: 'Kostya', facalty : 'ief',})


// Делаем лист массивом и через фор оф можно уже
/*
let listArray = list.toArray();
for (const element of listArray) {
  console.log(element);
}
console.log(list);
*/

// А тут попытаемся лист через итерал
console.log(list);
list[Symbol.iterator] = function () {
  let end = list.tail;
  let currentNode = list.head;
  return {
    next: function () {
      if (end !== list.tail) {
        currentNode = list.head.next;
      }
      
      return {
        value: currentNode, done: end === list.tail
      };
    }
  }
}
for (let value of list) {
  console.log(value);
 }