// Problem: https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

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

function designerPdfViewer(h, word) {
    const words = word.split(' ');
    let totalArea = 0;

    for (let w of words){
        let tallest = 0;
        for(let c of w){
            const height = h[c.codePointAt(0)-97];
            if (height > tallest){
                tallest = height;
            }
        }
        totalArea += w.length * tallest;
    }
    return totalArea;
}

function main() {
    h = readLine().split(' ');
    h = h.map(Number);
    var word = readLine();
    var result = designerPdfViewer(h, word);
    process.stdout.write("" + result + "\n");

}
