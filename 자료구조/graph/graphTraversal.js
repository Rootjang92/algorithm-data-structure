// ptop networking, 웹 크롤러, shortest path problems(GPS navigation, solving mazes, game AI)

// DFS
// 방문 했던 곳은 기억하고 있어야 함

// parameter -> vertex
// recursive
  // vertex empty -> return base case
  // add vertex to results list
  // mark vertex as visited
  // for each neighbor in vertext's neighbors
    // if neighbor is not visited -> recursively call DFS on neighbor
    
    
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


  dfsRecursive(start) {
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      results.push(vertex);

      adjacencyList[vertex].forEach(neighbor =>  {
        if(!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    })(start);

    console.log(results);
    return results;
  }

  dfsIterative(start) {
    const results = [];
    const visited = {};
    const stack = [start];
    let currentVertex 

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      results.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor)
        }
      })
    }

    console.log(results);
    return results;
  }

  bfs(start) {
    // create queue place the start vertex in it
    // visited nodes array
    const results = [];
    const visited = {};
    const queue = [start];
    let currentVertex 

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      results.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor)
        }
      })
    }

    console.log(results);
    return results;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

g.dfsRecursive("A");
g.dfsIterative("A"); // 재귀형이랑 겨로가가 다름.
g.bfs("A")