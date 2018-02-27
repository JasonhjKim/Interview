class Graph {
    constructor() {
        this.vertices = [];
        this.adjList = {};
    }

    has(data) {
        for (let i = 0; i < this.vertices.length; i++) {
            if(data === this.vertices[i]) return true;
        }
        return false;
    }

    addVertex(data) {
        if (!this.has(data)) {
            this.vertices.push(data);
            this.adjList[data] = [];
        }
    }

    addEdge(start, end) {
        this.adjList[start].push(end);
        this.adjList[end].push(start);
        return `${start} => ${end}, ${end} => ${start}`
    }

    removeVertex(vertex) {
        if (this.has(vertex)) {
            for (let i = this.adjList[vertex].length - 1; i >= 0; i--) {
                this.removeEdge(vertex, this.adjList[vertex][i])
            }
        }
    }

    removeEdge(start, end) {
        if (this.adjList[end].indexOf(start) > -1 && this.adjList[start].indexOf(end) > -1) {
            this.adjList[start].splice(this.adjList[start].indexOf(end), 1);
            this.adjList[end].splice(this.adjList[end].indexOf(start), 1);
        }
    }
    
    print() {
        var stringBuilder = "";
        for (let i = 0; i < this.vertices.length; i++) {
            stringBuilder += this.vertices[i] + " => " + this.adjList[this.vertices[i]] + "\n"
        }
        return stringBuilder;
    }

    bfs(vertex, callback) {
        if (!this.has(vertex)) {
            return null;
        }
        var queue = [];
        queue.push(vertex);
        var visited = {};
        visited[vertex] = true;
        while(queue.length) {
            vertex = queue.shift();
            callback(vertex);
            for (let i = 0; i < this.adjList[vertex].length; i++) {
                if (!visited[this.adjList[vertex][i]]) {
                    visited[this.adjList[vertex][i]] = true;
                    queue.push(this.adjList[vertex][i])
                }
            }
        }
    }

    dfs(vertex, callback) {
        var visited = [];
        if (!this.has(vertex)) {
            return null;
        }
        this.dfsNode(vertex, visited, callback);
    }

    dfsNode(vertex, visited, callback) {
        visited[vertex] = true;
        if (callback) {
            callback(vertex);
        }
        for (let i = 0; i < this.adjList[vertex].length; i++) {
            if (!visited[this.adjList[vertex][i]]) {
                this.dfsNode(this.adjList[vertex][i], visited, callback);
            }
        }

    }

    
}

let graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addEdge(1,5)
graph.addEdge(1,2)
graph.addEdge(2,5)
graph.addEdge(2,3)
graph.addEdge(2,4)
graph.addEdge(2,6)
graph.addEdge(3,5)
graph.addEdge(3,4)
graph.addEdge(4,6);
console.log(graph.print());

function printNode(data) {
    console.log(data);
}
graph.dfs(2, printNode);



