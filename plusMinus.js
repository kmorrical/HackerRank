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
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    var positives = 0
    var negatives = 0
    var zeroes = 0
    
    //console.log(arr);
    //console.log(arr.length);
    
    for(var i=0; i<arr.length; i++){
        
       
        
        if (arr[i]>0) {
           var positives = positives +1; 
            
           
        }
        else if (arr[i]<0){
            var negatives = negatives +1;
          
        }
        else {
            var zeroes = zeroes +1;
            
        }
        
    }
    posPercent = positives/n;
    negPercent = negatives/n;
    zeroPercent = zeroes/n;
    
    console.log(posPercent.toFixed(6));
    console.log(negPercent.toFixed(6));
    console.log(zeroPercent.toFixed(6));
}