// Problem: https://www.hackerrank.com/challenges/staircase/problem

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

function staircase(n) {
    for (let i = 1; i <= n; i++){
        for (let j=0;j < (n-i); j++){
            process.stdout.write(" ");
        }
        for(let j=(n-i);j<n; j++){
            process.stdout.write("#");
        }
        process.stdout.write("\n");
    }
}

function main() {
    var n = parseInt(readLine());
    staircase(n);

}
