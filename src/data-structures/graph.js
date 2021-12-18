// Create a graph using adjacency list

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // add vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // add edge to the graph
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}

let graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Pune");
graph.addVertex("Mumbai");
graph.addVertex("Chennai");
graph.addVertex("Sydney");

graph.addEdge("Pune", "Tokyo");
graph.addEdge("Pune", "Mumbai");
