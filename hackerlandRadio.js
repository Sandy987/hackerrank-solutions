// Problem: https://www.hackerrank.com/challenges/hackerland-radio-transmitters/problem

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

function hackerlandRadioTransmitters(n, x, k) {
    x.sort((a,b) => a-b);
    
    let numTrans = 0;
    let i = 0;
    while (i < n){
        numTrans++;
        let loc = x[i] + k;
        while (i < n && x[i] <= loc) i++;
        loc = x[--i] + k;
        while (i < n && x[i] <= loc) i++;
    }

    return numTrans;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    x = readLine().split(' ');
    x = x.map(Number);
    var result = hackerlandRadioTransmitters(n, x, k);
    process.stdout.write("" + result + "\n");

}
