'use strict';

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge{
  constructor(vertex, weight){
    this.vertex = vertex,
    this.weight = weight;
  }
}

class Graph{
  constructor (){
    this.adjacencyList = new Map();
  }

  addNode(node){
    this.adjacencyList.set(node, []);
  }

  addEdge(startVertex, endVertex, weight = 0) {

    if (!this.adjacencyList.has(startVertex)) {
      throw new Error('Invalid start vertex');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getting(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('no neighbors for that vertex');
    }

    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(vertex) {

    const queue = [];
    const visited = [];

    queue.unshift(vertex);
    visited.push(vertex);

    while (queue.length) {

      const currentVertex = queue.pop();
      const neighbors = this.getting(currentVertex);

      for (let neighbor of neighbors) {

        const neighborVertex = neighbor.vertex;

        if (visited.includes(neighborVertex)) {
          continue;
        } else {
          visited.push(neighborVertex);
          queue.unshift(neighborVertex);
        }
      }
    }

    return visited;
  }


  depthFirst(vertex) {

    const visitedVertices = new Set();

    visitedVertices.add(vertex);
    const traverse = (current, visited) => {

      visitedVertices.add(current);

      const neighbors = this.getting(current);

      for (let neighbor of neighbors) {
        if (!visited.has(neighbor.vertex)) {
          traverse(neighbor.vertex, visited);
        }
      }
    };
    traverse(vertex, visitedVertices);
    return visitedVertices;
  }

  size(start){
    let arr = this.breadthFirst(start);
    return arr.length;
  }
}


module.exports = {
  vertex: Vertex,
  edge: Edge,
  graph: Graph,
};
