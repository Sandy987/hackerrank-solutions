// Problem : https://www.hackerrank.com/challenges/insertionsort1/problem

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

function insertionSort1(n, arr) {
    const v = arr[n-1];
    for (let i = n-1; i >= 0; i--){
        if (arr[i-1] <= v || i === 0){
            arr[i] = v;
            console.log(arr.join(" "));
            break;
        } else {
            arr[i] = arr[i-1];
        }
        console.log(arr.join(" "));
    }
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    insertionSort1(n, arr);

}
