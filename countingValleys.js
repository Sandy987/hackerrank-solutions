// Problem: https://www.hackerrank.com/challenges/counting-valleys/problem

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

function countingValleys(n, s) {
    let currentHeight = 0;
    let numMountains = 0;
    let numValleys = 0;

    for (let i = 0; i < s.length; i++){
        if (s[i] === "U"){
            currentHeight += 1;
            if (currentHeight === 0){
                numValleys += 1;
            }
        } else if (s[i] === "D"){
            currentHeight -= 1;
            if (currentHeight === 0){
                numMountains += 1;
            }
        }
    }

    return numValleys;
}

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var result = countingValleys(n, s);
    process.stdout.write("" + result + "\n");

}
