// FIFO
// 줄서서 기다리는 행위
// print, uploading resource (sync)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // 맨 뒤 추가
  // 큐 안에 노드가 없으면 first, last
  // 새로운 프로퍼티가 현재 last node가 되게 하고
  enqueue(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.size++;
  }

  // 맨 앞 제거
  // first 변수 저장
  dequeue() {
    if (this.size === 0) return null;
    if (this.first === this.last) {
      this.last = null;
    }

    const temp = this.first;
    this.first = this.first.next;
    this.size--;

    return temp.val;
  }
}

const queueVal = new Queue();

queueVal.enqueue(1);
queueVal.enqueue(2);
queueVal.enqueue(3);
queueVal.enqueue(4);
queueVal.dequeue();

console.log(queueVal);

// insertion, removal : O(1) / searching, access O(N)

