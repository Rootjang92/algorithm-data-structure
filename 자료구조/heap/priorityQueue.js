// 우선순위 큐
// 각 요소가 그에 해당하는 우선순위를 가지는 데이터 구조
// 더 높은 우선순위를 가진 요소가 먼저 처리된다.
// ex) 응급실, 컴퓨터 운영체제

class Node {
  constructor(value, priorty) {
    this.value = value;
    this.priorty = priorty;
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  bubbleUp() {
    let lastIdx = this.values.length - 1;
    const lastElement = this.values[lastIdx];
    
    while (lastIdx > 0) {
      let parentIndex = Math.floor((lastIdx - 1) / 2);
      let parentElement = this.values[parentIndex];

      if (lastElement.priorty >= parentElement.priorty) break;

      this.values[parentIndex] = lastElement;
      this.values[lastIdx] = parentElement;
      lastIdx = parentIndex;
    }
  }

  enqueue(value, priorty) {
    let newNode = new Node(value, priorty);
    this.values.push(newNode);
    this.bubbleUp();
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (leftChild.priorty < element.priorty) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if ((swap === null && rightChild.priorty < element.priorty) 
        || (swap !== null && rightChild.priorty < leftChild.priorty)) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }
}

const ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

ER.dequeue();


console.log(ER);