// Problem: https://www.hackerrank.com/challenges/sherlock-and-squares/problem

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

function squares(a, b) {
    return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var a_temp = readLine().split(' ');
        var a = parseInt(a_temp[0]);
        var b = parseInt(a_temp[1]);
        var result = squares(a, b);
        process.stdout.write("" + result + "\n");
    }

}
