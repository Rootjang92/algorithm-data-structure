// 이진 탐색 트리와 매우 비슷함.
// 최대 이진 힙 : 부모 노드가 항상 자식 노드보다 큰 값을 가진다. -> 형제 노드 사이에서는 보장되지 않는다. (특별한 순서가 없음)
// 최소 이진 힙 : 최대 이진 힙의 반대

// index = n -> left child = 2n + 1 / right child = 2n + 2
// 반대로 child index = b -> parent node index (n-1)/2 (floored)

// bubbleup
// 배열의 마지막 요소를 가지고 온다.
// 부모의 index를 찾는다.
// 부모의 값과 마지막 요소를 비교한다.
// 어느 것이 큰 값인지 확인하고 마지막 요소가 더 크다면 위치를 변경한다.


// Add to the end -> bubble up (자기 자리 찾아가기)
class MaxBinaruHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]
  }

  bubbleUp() {
    let lastIdx = this.values.length - 1;
    const lastElement = this.values[lastIdx];
    
    while (lastIdx > 0) {
      let parentIndex = Math.floor((lastIdx - 1) / 2);
      let parentElement = this.values[parentIndex];

      if (lastElement <= parentElement) break;

      this.values[parentIndex] = lastElement;
      this.values[lastIdx] = parentElement;
      lastIdx = parentIndex;
    }
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  // root를 제대로 된 자리로 가져다 둔다.
  // 루트 제거 -> 마지막 요소를 루트로 -> 올바른 힙이 아님
  // maxtractMax로 자식과 비교
  // 큰 값으로 루트 변경
  // 변경된 자리에서 다시 자식과 비교하여 큰 값을 위로 올린다.

  // 루트와 맨 마지막 값 변경하고 맨 마지막 값 삭제
  // maxtractMax
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

        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }
}

const maxBinaryHeap = new MaxBinaruHeap();

maxBinaryHeap.insert(55);
maxBinaryHeap.extractMax();
maxBinaryHeap.extractMax();
maxBinaryHeap.extractMax();

console.log(maxBinaryHeap);

// log N
// search - O(N)
// 내려갈 때마다 2배의 노드가 생김. -> 그러나 과정에서는 한줄에 한 번만 비교하면 됨.
// 우선순위 큐같은 데이터 구조를 다룰 때 유리함.