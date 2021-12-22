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

  // traverse the graph recursively
  // Visit the vertex and then visit all the adjacent vertices
  // Mark the vertex as visited and push into the result array
  DFSRecusrsive(vertex) {
    const result = [];
    const visited = {};

    const helperFunction = (vertex) => {
      if (!vertex) return;
      visited[vertex] = true;
      result.push(vertex);
      const neighbourCertices = this.adjacencyList[vertex];
      neighbourCertices.map((ver) => {
        if (!visited[ver]) return helperFunction(ver);
      });
    };

    helperFunction(vertex);
    return result;
  }
}

let graph = new Graph();
// graph.addVertex("Tokyo");
// graph.addVertex("Pune");
// graph.addVertex("Mumbai");
// graph.addVertex("Chennai");
// graph.addVertex("Sydney");

// graph.addEdge("Pune", "Tokyo");
// graph.addEdge("Pune", "Mumbai");

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

//        A
//      /   \
//    B       C
//    |       |
//    D  ---  E
//     \     /
//        F

graph.DFSRecusrsive("A"); // A B D E C F
