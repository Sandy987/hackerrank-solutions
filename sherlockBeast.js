// Problem: https://www.hackerrank.com/challenges/sherlock-and-the-beast/problem

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

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        let result = getDecentNumber(n);
        console.log(result);
    }
}

function getDecentNumber(n){
    // Get the mix of digits that results in the largest number of 5s and least number of 3s that still satisfy the rule
    for (let i = n; i >= 0; i--){
        let mod5 = i%3;
        let mod3 = (n-i)%5;
        if (mod5 === 0 && mod3 === 0){
            let result = "";
            for (let j =0; j < i; j++) result += "5";
            for (let j =0; j < (n-i); j++) result += "3";
            return result;
        }
    }

    return "-1";
}
