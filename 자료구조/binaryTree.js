// Node로 이루어진 데이터 구조
// 부모 - 자식 관계가 존재한다.
// 노드는 1개가 아니라 여러개 가능.
// 단일 연결 리스트도 아주 특별한 트리라고 할 수 있음.
// 부모가 자식을 가리켜야 트리임.
// 루트는 1개여야 한다.
// HTML DOM, AI, 머신 러닝...

// 이진 트리는 각 노드가 최대 2개의 자식을 갖는다.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 값을 입력하면 적당한 자리에 값을 넣음.
  // 새로운 노드를 만들고 루트로 간다.
  // 루트가 없으면 루트를 만든다.
  // 루트가 존재하면 새로운 노드의 값이 루트의 값보다 큰지 작은지를 확인한다.
  // 더 크다면 노드에 오른쪽에 값이 있나 확인한다. (작으면 왼쪽)
  // 순환 반복
  // 마지막은 전체 트리 출력
  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (val === current.value) return undefined;

        if (val < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }

          current = current.right;
        }
      }
    }
  }

  // 루트에서 시작해서 루트가 없거나 같으면 서칭 종료
  // 루트값보다 작으면 왼족 크면 오른쪽 이동
  find(value) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return false;
    console.log(current);
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2)
tree.insert(16);
tree.insert(7);
tree.find(5);

console.log(tree);


// insertion - O(logn), searching - o(logn)
// 이미 정렬이 다 되어 있음.
// 2배로 증가하면 단계는 1증가

