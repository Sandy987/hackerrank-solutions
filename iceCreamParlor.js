// Problem: https://www.hackerrank.com/challenges/icecream-parlor/problem

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

function icecreamParlor(m, arr) {
    for (let i = 0; i < arr.length; i++){
        const priceOne = arr[i];
        for (let j = i + 1; j < arr.length; j++){
            const priceTwo = arr[j];
            if (m === (priceOne + priceTwo)) return [i+1, j+1]; // The ID's are offset by one
        }
    }
    return; // No solution
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var m = parseInt(readLine());
        var n = parseInt(readLine());
        arr = readLine().split(' ');
        arr = arr.map(Number);
        var result = icecreamParlor(m, arr);
        console.log(result.join(" "));


    }

}
