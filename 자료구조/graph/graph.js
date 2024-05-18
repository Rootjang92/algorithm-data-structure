// 그래프는 노드나 노드들의 연결을 모아놓은 것들.
// 지도, 네비게이션, SNS...

// vertex - a node
// Edge - connection between nodes

// Adjacency list : 간선이 많지 않고 퍼져있는 그래프, 특정 간선을 확인하려면 느려짐
// Adjacency matrix : 간선을 확인하려면 모든 간선을 확인해야 함


// 무방향 그래프
class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  // 정점을 인접 리스트에 추가
  // 정점의 이름을 인접 리스트의 키로 입력 (빈 배열)
  addVertex(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = [];
  }

  // adjacencyList에서 vertext2의 키를 찾아서 vertext1에 추가
  addEdge(vertext1, vertext2) {
    this.adjacencyList[vertext1].push(vertext2);
    this.adjacencyList[vertext2].push(vertext1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }

  removeVertex(key) {
    while(this.adjacencyList[key].length) {
      const adjacentVertext = this.adjacencyList[key].pop();
      this.removeEdge(key, adjacentVertext);
    }

    delete this.adjacencyList[key]
  }
}

const test = new Graph();
test.addVertex('Seoul');
test.addVertex('Tokyo');
test.addVertex('Dallas')
test.addEdge('Seoul', "Tokyo");
test.addEdge("Dallas", 'Tokyo');
test.removeVertex("Dallas");
console.log(test);