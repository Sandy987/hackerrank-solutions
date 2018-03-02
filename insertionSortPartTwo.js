// Problem : https://www.hackerrank.com/challenges/insertionsort2/problem
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

function insertionSort2(n, arr) {
    for (let i = 1; i < arr.length; i++){
        for (let j = i; j > 0 && arr[j-1] > arr[j]; j--){
            let swp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = swp;
        }
        console.log(arr.join(" "))
    }
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    insertionSort2(n, arr);

}
