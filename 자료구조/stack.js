// LIFO

// Managing function invocations
// Undo / Redo
// routing (history object)

const stack = [];

stack.push("google");
stack.push("instagram");
stack.push("youtube");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // 맨 앞에서 추가와 제거를 할 예정
  // 노드가 없을 경우 first, last 지정
  // 노드가 하나라도 있다면 현재 first를 저장하는 변수를 만들고 first가 새로운 노드가 되도록 연결
  // 노드의 next 프로퍼티가 만들어두었던 변수가 되도록 해주고, size를 추가한다.
  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const prevFirst = this.first;
      this.first = newNode;
      this.first.next = prevFirst;
    }
    return this.size++;
  }

  // stack이 비어있다면 null return
  // 임시 변수 -> 첫 번째 프로퍼티 저장
  // 만약에 노드가 1이면 first, last = null
  // first 프로퍼티를 다음 first 요소의 next로 설정, size를 1 줄임
  pop() {
    if (this.size === 0) return null;
    if (this.first === this.last) {
      this.last = null;
    }

    const temp = this.first;
    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}

const stackVal = new Stack();

stackVal.push(1);
stackVal.push(2301);
stackVal.push(705);
stackVal.pop();
stackVal.pop();
stackVal.pop();


console.log(stackVal);