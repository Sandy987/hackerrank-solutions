// Problem: https://www.hackerrank.com/challenges/countingsort1/problem

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

function countingSort(arr) {
    const counts = new Array(100).fill(0);
    for (let i = 0; i < arr.length; i++) counts[arr[i]]++;
    return counts;
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = countingSort(arr);
    console.log(result.join(" "));



}
