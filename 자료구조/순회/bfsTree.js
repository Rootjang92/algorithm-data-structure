// 너비 우선 탐색
// queue 사용
// 루트를 계속 큐에 넣고 큐에 있다는 루프를 돌린다.
// dequeue
// queue, visited 변수 2개 (리스트)

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

  bfs() {
    const data = [];
    const queue = [];
    let node = this.root;
  
    queue.push(node);
  
    while(queue.length) {
      node = queue.shift();
      data.push(node);
  
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  
    console.log(data);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8)
tree.insert(20);
tree.bfs();



