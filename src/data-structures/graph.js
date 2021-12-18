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

  // remove edge from the graph
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // remove vertex from the graph
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacencyList[vertex];
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
