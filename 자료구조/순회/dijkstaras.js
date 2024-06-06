// 다익스트라
// 그래프, 우선순위 큐 위주로 사용된다.

// 다익스트라 최단 경로 알고리즘
// GPS, Network Routing, Biology, Airline tickets...

class PriorityQueue {
  constructor() {
    this.values = [];
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

  enqueue(val, priorty) {
    this.values.push({ val, priorty });
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


// 가중치 그래프
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight});
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let path = [];

    // build initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while(nodes.values.length) {
      smallest = nodes.dequeue().val;
      if(smallest === finish) {
        // build up path
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for(let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;

          if (candidate < distances[nextNode.node]) {
            // updating new smallest distance to neighbor
            distances[nextNode.node] = candidate;
            // updating previos - How we got to neighbor
            previous[nextNode.node] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNode.node, candidate)
          }
        }
      }
    }
    console.log(path.concat(smallest).reverse());
    return path.concat(smallest).reverse();
  }
};

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.dijkstra("A", "E");