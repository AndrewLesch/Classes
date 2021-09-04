class DoubleLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  [Symbol.iterator] = function () {
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
  // Append метод принимает значение в качестве аргумента и создаёт новый узел с этим значением, помещая его в конец связного списка.
  append(value) {
    // Создаём новый узел.
    const newNode = new DoubleLinkedListNode(value);
  
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
  
    for (const i of this) {
      nodes.push(i);
    }

    return nodes;
  }
}

const list = new DoubleLinkedList();
list.append({name: 'Oleg', facalty : 'fre',});
list.append({name: 'Evg', facalty : 'ksis',});
list.append({name: 'Kostya', facalty : 'ief',})

for (let value of list) {
  console.log(value);
}