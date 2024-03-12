// 앞 노드로 갈 수 있는 포인터가 하나 추가됨.
// 앞으로 가는 포인터, 뒤로 가는 포인터 모두 존재.
// 

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 추가 노드 만들기.
  // head null, 새로운 노드로 설정.
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // tail이 없다면 undefined return
  // tail 변수 저장
  // length = 1 -> head, tail 모두 null
  // tail -> prev
  // new tail next -> null
  pop() {
    if (!this.head) return undefined;
    let prevTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = prevTail.prev;
      this.tail.next = null;
      prevTail.prev = null;
    }
    this.length--;
    return prevTail;
  }

  // head property 변수 저장
  // 길이가 1일 때 제거하면 헤드를 null로 지정
  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  // 새로운 노드를 만들고
  // 길이가 0이면 헤드와 테일이 새로운 노드가 되게 만든다.
  // 헤드의 prev가 새로운 노드가 되도록 한다.
  // 새로운 노드의 next 프로퍼티가 현재 헤드가 되도록 한다.
  // 새로운 노드가 head가 되도록 한다.
  // return this.
  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // 인덱스가 유효한지 확인하기
  // 인덱스가 리스트의 길이의 절반보다 작거나 같으면 head부터 그렇지 않으면 tail부터 순회
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current;

    if (index <= this.length / 2) {
      current = this.head;
      
      while (count !== index) {
        current = current.next;
        count++;
      }

      
    } else {
      count = this.length - 1;
      current = this.tail;

      while (count !== index) {
        current = current.prev;
        count--;
      }
    }

    console.log(current, count);
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afternode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afternode;
    afternode.prev = newNode;

    this.length++;
    return true;
  }

  // next, prev 프로퍼티를 변경.
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.prev = null;
    removedNode.next = null;
    
    this.length--;
    return this;
  }
}


const list = new DoublyLinkedList();

list.push("Hello");
list.push("Good bye");
list.push("!");


list.remove(2)

console.log(list);

// 단일 연결 리스트 이중 연결 리스트 비교.
// insertion - O(1), Removal - O(1), Search = O(N), Access - O(N)
// 포인트는 포인터..!
// 데이터를 반대 방향으로 취급할 경우 유리.
// 그러나 메모리가 더 많이 듬.
// 결국 일정 상황에서는 더 좋을 수 있지만 메모리를 더 많이 소비함.