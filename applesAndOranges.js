// Problem: https://www.hackerrank.com/challenges/apple-and-orange/problem

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

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Complete this function
    let appleHit = 0;
    let orangeHit = 0;

    for (let i = 0; i < apples.length; i++){
        const dist = a + apples[i];
        if (dist >= s && dist <= t){
            appleHit++;
        }
    }

    for (let i = 0; i < oranges.length; i++){
        const dist = b + oranges[i];
        if (dist >= s && dist <= t){
            orangeHit++;
        }
    }

    process.stdout.write(`${appleHit}` + "\n")
    process.stdout.write(`${orangeHit}` + "\n")
}

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);
    countApplesAndOranges(s, t, a, b, apple, orange);

}
