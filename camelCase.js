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
    var s = readLine();
    var sL = s.length;
    var wordCount = 0;
    var i = 0;
    for (; i<sL; i++){
        if (s.charAt(i) === s.charAt(i).toUpperCase()) {
        wordCount = wordCount + 1;
        
    }
    }
    wordCount = wordCount + 1;
    console.log(wordCount);
}
