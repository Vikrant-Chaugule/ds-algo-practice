// Create a graph using adjacency list - WEIGHTED GRAPH

class WeightedGraph {
  constructor() {
    this.adjacencyList = [];
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B", 10);
graph.addEdge("A", "C", 20);
graph.addEdge("C", "B", 30);

graph.adjacencyList;
// {
//    A: [ { node: 'B', weight: 10 }, { node: 'C', weight: 20 } ],
//    B: [ { node: 'A', weight: 10 }, { node: 'C', weight: 30 } ],
//    C: [ { node: 'A', weight: 20 }, { node: 'B', weight: 30 } ]
// }
