// Problem: https://www.hackerrank.com/challenges/priyanka-and-toys/problem

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

function toys(n, w) {
    w.sort((a,b) => a-b);

    let i =0;
    let numPurchase = 0;
    while (i < n){
        numPurchase++;
        let x = w[i];
        while (i< n && w[i] <= x+4) i++;
    }
    return numPurchase;
}

function main() {
    var n = parseInt(readLine());
    w = readLine().split(' ');
    w = w.map(Number);
    var result = toys(n, w);
    process.stdout.write("" + result + "\n");

}
