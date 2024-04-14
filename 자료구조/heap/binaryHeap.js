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
}

const maxBinaryHeap = new MaxBinaruHeap();

maxBinaryHeap.insert(55);
console.log(maxBinaryHeap);
