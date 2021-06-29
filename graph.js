// DATA
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];


// The graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
    adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log('Map of airport routes:');
console.log(adjacencyList);

let bfsCount = 0;
let dfsCount = 0;

//Breadth-first search (BFS)
function bfs(start) {

    const visited = new Set();

    const queue = [start]
    while (queue.length > 0) {

        const airport = queue.shift();
        const destinations = adjacencyList.get(airport);
        

        for (const destination of destinations) {
            if (destination === 'BKK') {
                console.log('BFS found destination airport.')
            }
            
            //If destination has been searched add it to visited set
            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
                console.log(destination)
                bfsCount = bfsCount + 2;
            }
        }

    }

}

//Call function starting from PHX airport.
bfs('PHX')

console.log("Big O complexity: " + bfsCount)

//Depth-first search (recursive)
function dfs(start, visited = new Set()) {

    console.log(start)
    visited.add(start);

    const destinations = adjacencyList.get(start);

    for (const destination of destinations) {

        if (destination === 'BKK') { 
            console.log(`DFS found destination airport.`)
            console.log('Big O complexity: ' + dfsCount)
            return;
        }
        
        if (!visited.has(destination)) {
            dfs(destination, visited);
            dfsCount = dfsCount + 2;
        }

    }

}

//Call function starting from PHX airport.
dfs('PHX')





//Future input plan
// let input = prompt('Which airport are you flying from?');
// if (!destinations.has(input)) {
//     console.log('Invalid airport.')
// }

// else {
//     bfs(input)
// }