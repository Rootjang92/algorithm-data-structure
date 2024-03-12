// 데이터 저장 자료구조
// 순서에 따라 데이터 저장
// 배열과 다른 점은 다음 데이터를 가리키는 인덱스 없이 다수의 데이터 요소로 구성된다.
// pointer로 연결되어 사용된다. (기차 처럼)
// element = node
// 다음 노드가 없을 경우 null을 저장한다.
// head - 시작 노드, tail - 마지막 노드

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const first = new Node("Hi");
// first.next = new Node("therer");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

// console.log(first);

class SinglyLinkedList extends Node {
  constructor() {
    super();
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 주어진 값으로 새로운 노드를 생성.
  // 길이가 0일 경우 그 값은 head이자 tail
  // 리스트가 비어있지 않다면, 마지막 노드의 next를 새롭게 생성된 노드를 가리키도록 한다.
  // 길이 증가.
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  // 리스트 맨 마지막 노드 제거
  // 리스트가 비면 undefined 반환
  // tail값 업데이트
  // 길이 빼기
  pop() {
    if (!this.head) return undefined;
    let current = this.head, newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // 리스트 맨 앞 제거
  // 헤드 제거 후 next 값을 헤드로 지정하기
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  // 새로운 노드를 맨 앞에 넣는 것.
  // 헤드와 테일이 모두 변경되어야 함.
  // 길이 1증가, 마지막 list 반영
  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    
    this.length++;
    return this;
  }

  // 주어진 위치의 노드를 반환하는 함수
  // index는 양수이거나 길이보다 같거나 작아야 함.
  // 반복문을 통해 인덱스에 해당하는 노드를 반환
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    const current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    console.log(current, counter);
    return current;
  }

  // index의 값을 val로 update
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // index, value
  // index가 0보다 작거나 리스트의 길이보다 클 경우 false
  // index와 길이가 같을 경우 맨 마지막에 삽입 -> push
  // 리스트 맨 앞 -> unshift
  // get -> index - 1 호출
  // 삽입 후 길이 1 증가
  // return true
  insert(index, val) {
    const newNode = new Node(val);

    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // 리스트 중간에 있는 노드 제거
  // 인덱스가 length - 1과 같을 경우 pop
  // get(index - 1) -> .next를 이전 노드의 next로 설정함.
  // 길이 감소
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.unshift();

    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  // swap head and tail
  // next value 선언
  // prev value 선언
  // current 변수를 선언하여 현재 해드값을 초기화시킴
  // 반복문으로 현재 노드의 next를 node의 next.next로 설정하는 작업을 반복
  // 현재 node의 next를 이전에 바로 앞에 있던 노드를 가리키도록 한다.
  // 현재의 node를 prev에 저장하고 .next 값을 저장한다.\

  print() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

const list = new SinglyLinkedList();

list.push("Hello");
list.push("Good bye");
list.push("!");
list.reverse();
list.print();

console.log(list);

