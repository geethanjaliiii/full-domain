class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, isUndirected = false) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].push(vertex2);
    if (isUndirected) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  isCyclic() {
    const isListed = new Set();
    const pathVisited = new Set();

    //helper funtion
    let dfsCheck = (vertex) => {
      isListed.add(vertex);
      pathVisited.add(vertex);
      let neighbours = this.adjacencyList[vertex];
      for (let neighbour of neighbours) {
        if (!isListed.has(neighbour)) {
          if (dfsCheck(neighbour)) {
            return true;
          }
        } else if (pathVisited.has(neighbour)) {
          return true;
        }
      }

      //if it dont have neighbours -->backtrack
      pathVisited.delete(vertex);
      return false;
    };
    for (let vertex in this.adjacencyList) {
      if (dfsCheck(vertex)) {
        return true;
      }
    }
    return false;
  }
}
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("C", "A"); // Back edge forming a cycle
graph.addEdge("C", "E");
graph.addEdge("E", "B");
graph.addEdge("B", "D");
graph.addEdge("B", "A");

console.log(graph.isCyclic());
