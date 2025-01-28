class Graph{
constructor(){
    this.adjacencyList={}
}
addVertex(vertex){
    if(!this.adjacencyList[vertex]){
        this.adjacencyList[vertex]=[]
    }
}
addEdge(vertex1,vertex2,isUndirected=false){
    if(!this.adjacencyList[vertex1]){
        this.addVertex(vertex1)
    }
    if(!this.adjacencyList[vertex2]){
        this.addVertex(vertex2)
    }
    this.adjacencyList[vertex1].push(vertex2)
    if(isUndirected){
        this.adjacencyList[vertex2].push(vertex1)
    }
}
bfs(start){
    let visited=new Map()
let queue=[start];
let result=[]
while(queue.length){
    let current=queue.shift()
    if(!visited.has(current)){
          visited.set(current)
          result.push(current)
    }
   for(let neighbour of this.adjacencyList[current]){
    if(!visited.has(neighbour)){
        queue.push(neighbour)
    }
   
   }
}
return result
}
dfs(start){
    let visited=new Set()
    let result=[]
    let dfsHelper=(vertex)=>{
       if(visited.has(vertex)) return;
       visited.add(vertex);
       result.push(vertex);
       
       
    this.adjacencyList[vertex].forEach(neighbour=>dfsHelper(neighbour))
    
    }
    dfsHelper(start);
    return result;
}
}
const graph= new Graph()
graph.addEdge('A' ,'B')
graph.addEdge('B','C')
graph.addEdge('C','D')
graph.addEdge('C','B')
graph.addEdge('B','E')

console.log(graph.bfs('A'));
console.log(graph.dfs('A'));
