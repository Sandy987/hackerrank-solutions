// Problem: https://www.hackerrank.com/challenges/quicksort1/problem

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

function quickSort(arr) {
    const p = arr[0];
    let left = [], right = [], equal = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === p) equal.push(arr[i]);
        if (arr[i] > p) right.push(arr[i]);
        if (arr[i] < p) left.push(arr[i]);
    }
    
    process.stdout.write(left.join(" "))
    process.stdout.write(" ")
    process.stdout.write(equal.join(" "))
    process.stdout.write(" ")
    process.stdout.write(right.join(" "))
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    quickSort(arr);
}
