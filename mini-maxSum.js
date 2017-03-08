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
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var c = parseInt(a_temp[2]);
    var d = parseInt(a_temp[3]);
    var e = parseInt(a_temp[4]);
    
    
    
 var sum1 = a + b + c + d;
 var sum2 = e + b + c + d;
 var sum3 = a + e + c + d;
 var sum4 = a + b + e + d;
 var sum5 = a + b + c + e;
    
 var sumArr = [sum1, sum2, sum3, sum4, sum5];

    var smallest = Math.min(sumArr[0], sumArr[1], sumArr[2], sumArr[3], sumArr[4]);
    var largest = Math.max(sumArr[0], sumArr[1], sumArr[2], sumArr[3], sumArr[4]);
 
    console.log(smallest, largest);
    
}
