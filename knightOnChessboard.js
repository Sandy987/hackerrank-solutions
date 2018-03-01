// Problem: https://www.hackerrank.com/challenges/knightl-on-chessboard/problem

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

//// HELPERS

// Get a list of possible places we can move to from a given (x,y) co-ordinate
function getPossibleMoves(x, y, a, b, n){
    const allMoves = [
        {x: x+a, y: y+b},
        {x: x+a, y: y-b},
        {x: x-a, y: y+b},
        {x: x-a, y: y-b},
        {x: x+b, y: y+a},
        {x: x+b, y: y-a},
        {x: x-b, y: y+a},
        {x: x-b, y: y-a}
    ];

    return allMoves
        .filter(m => m.x >= 0 && m.x < n && m.y >= 0 && m.y < n)
        .map(m => m.x + (m.y * n));
}


//// END HELPERS

const memoisedKnightL = [];
function knightL(a, b, n){
    if (memoisedKnightL[a + (b*n)]) return memoisedKnightL[a + (b*n)];
    if (memoisedKnightL[b + (a*n)]) return memoisedKnightL[b + (a*n)]; // (a,b) and (b,a) have the same results

    const queue = [];
    const dists = new Array(n*n).fill(Infinity); // We are going to represent the entire chess board as a single dimensional array

    // Start point
    dists[0] = 0;
    queue.push(0);

    while (queue.length !== 0){
        const node = queue.shift();
        const y = Math.trunc(node / n);
        const x = node - (y * n);
        const neighbours = getPossibleMoves(x,y,a,b,n);

        for (let i = 0; i < neighbours.length; i++){
            if ((dists[node] + 1) < dists[neighbours[i]]){ // If the distance from the current square to the neighbour is less than previously seen, push onto queue.
                dists[neighbours[i]] = dists[node] + 1;
                queue.push(neighbours[i]);
            }
        }
    }

    const distanceToTarget = dists[(n-1) + ((n-1) * n)];
    const result = distanceToTarget === Infinity ? -1 : distanceToTarget;
    memoisedKnightL[a + (b*n)] = result;
    return result;
}

function main() {
    var n = parseInt(readLine());
    for (let i = 1; i < n; i++){
        const results = [];

        for (let j = 1; j < n; j++){
            results.push(knightL(i,j,n));
        }

        console.log(`${results.join(' ')}`);
    }
}
