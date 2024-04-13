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
      data.push(node.value);
  
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  
    console.log(data);
    return data;
  }

  dfsPreOrder() {
    // 전위 순회
    // 재귀 사용
    // 방문했던 것 저장하는 변수
    // current -> 트리 루트
    // 헬퍼 함수 -> 주어진 노드에 의해 호출된다. 루트 - 왼쪽 - 오른쪽 반복
    // PreOrder 
    const data = [];
    let current = this.root;

    const traverse = (node) => {
      data.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);

    console.log(data);
    return data;
  }

  dfsPostOrder() {
    // 후위 순회
    // root를 언젠간 방문하여야 하고 왼쪽, 오른쪽 모두 방문해야 함.
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node.value);
    }

    traverse(this.root);
    console.log(data);
    return data;
  }

  dfsInOrder() {
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
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
tree.dfsPreOrder(); // data 배열 만듬 -> traverse 호출(root) -> left, right 확인 -> push -> 반복
tree.dfsPostOrder(); // data 배열 만듬  -> left, right 확인 -> traverse 호출(root) -> push -> 반복
tree.dfsInOrder(); // 왼쪽 방문 -> 부모 노드 -> 오른쪽 방문 확인 

// bfs vs dfs 
// 트리에 따라 다르다.
// 엄청 넓게 펴진 트리 -> bfs는 queue 저장에 많은 공간 사용
// 중위 순회 -> 오름차순 정렬 등에 유리. (순서대로 작업 필요한 경우)
// 전위 순회 -> 트리 복사, 평탄화