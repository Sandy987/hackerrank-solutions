// Problem: https://www.hackerrank.com/challenges/bfsshortreach/problem

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

const EDGE_LENGTH = 6;

function getNeighbourNodes(node, edges){
    return edges
        .filter(e => e[0] === node || e[1] === node)
        .map(e => e[0] === node ? e[1] : e[0]);
}

function bfs(n, m, edges, s) {
    const dists = new Array(n+1).fill(Infinity);
    const queue = [];
    dists[s] = 0;
    queue.push(s);

    while (queue.length){
        let node = queue.shift();
        const neighbours = getNeighbourNodes(node, edges);
        for (let i = 0; i < neighbours.length; i++){
            const newDist = dists[node] + 6;
            if (newDist < dists[neighbours[i]]){
                dists[neighbours[i]] = newDist;
                queue.push(neighbours[i]);
            }
        }
    }

    return dists
        .filter((_, idx) => idx !== s && idx !== 0) // 0-indexing
        .map(d => d !== Infinity ? d : -1);
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        var edges = [];
        for(edges_i = 0; edges_i < m; edges_i++){
           edges[edges_i] = readLine().split(' ');
           edges[edges_i] = edges[edges_i].map(Number);
        }
        var s = parseInt(readLine());
        var result = bfs(n, m, edges, s);
        console.log(result.join(" "));


    }

}
