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

list[Symbol.iterator] = function () {
  let currentNode = this.head;
  return {
    next: function() {
      const value = currentNode;

      if (value) {
        currentNode = value.next;
      }
      return {value, done : !value}
    },
    [Symbol.iterator]: function() {
      return this;
    }
  }
}

let iteratedList = list[Symbol.iterator]();
for (let value of iteratedList) {
  console.log(value);
 }