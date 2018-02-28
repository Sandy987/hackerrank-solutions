// Problem: https://www.hackerrank.com/challenges/candies/problem

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

function candies(n, rating) {
    // Base cases
    if (n === 1) return 1;
    if (n === 2) return rating[0] === rating[1] ? 2 : 3;

    const candies = [];

    // Left to right
    for (let i = 0; i < n; i++){
        candies[i] = i === 0 || rating[i] <= rating[i-1]
            ? 1
            : candies[i-1] + 1;
    }
    // Right to left
    for (let i = n-2; i >= 0; i--){
        candies[i] = rating[i] > rating[i+1] && candies[i] <= candies[i+1]
            ? candies[i+1] + 1
            : candies[i]
    }

    let sum = 0;
    for (let i = 0; i < n; i++){
        sum += candies[i];
    }
    return sum;
}

function main() {
    var n = parseInt(readLine());
    var arr = [];
    for(var arr_i = 0; arr_i < n; arr_i++){
       arr[arr_i] = parseInt(readLine());
    }
    var result = candies(n, arr);
    process.stdout.write("" + result + "\n");

}
