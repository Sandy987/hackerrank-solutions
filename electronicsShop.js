// Problem: https://www.hackerrank.com/challenges/electronics-shop/problem

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

function getMoneySpent(keyboards, drives, s){
    keyboards = keyboards.sort((a,b) => a-b);
    drives = drives.sort((a,b) => a-b);

    var maxSpend = -1;
    for (var k = 0; k < keyboards.length; k++){
        for (var d = 0; d < drives.length; d++){
            var spend = keyboards[k] + drives[d];
            if (spend <= s && spend > maxSpend){
                maxSpend = spend
            }
        }
    }

    return maxSpend;
}

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var n = parseInt(s_temp[1]);
    var m = parseInt(s_temp[2]);
    keyboards = readLine().split(' ');
    keyboards = keyboards.map(Number);
    drives = readLine().split(' ');
    drives = drives.map(Number);
    //  The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
    var moneySpent = getMoneySpent(keyboards, drives, s);
    process.stdout.write(""+moneySpent+"\n");

}
