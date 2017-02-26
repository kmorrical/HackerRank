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
    var time = readLine();
    var arr = time.split("");
      
    
    if (arr[8]=="P") {
       
       if(arr[0]=="1" && arr[1]=="2"){
       arr.splice(8,2);
       arr2=arr.join("");
       console.log(arr2);  
       } 
        
       else if (arr[0]>0){
       notZero = arr[0] + arr[1];
       //console.log(notZero);
       arr[1]=notZero;
       //console.log(notZero);
       newNum = parseInt(arr[1])+12;
       arr[1]=newNum;
       arr.splice(0,1);
       arr.splice(7,2);
       arr2=arr.join("");
       console.log(arr2);
           
       }
       
       else{
       newNum = parseInt(arr[1])+12;
       arr[1]=newNum;
       arr.splice(0,1);
       arr.splice(7,2);
       arr2=arr.join("");
       console.log(arr2);
    }
    }
    
    else if (arr[8]=="A") {
        if(arr[1]=="2" && arr[0]=="1"){
            arr[0]="0";
            arr[1]="0";
            arr.splice(8,2);
            arr2=arr.join("");
            console.log(arr2);
        }
        else{
        arr.splice(8,2);
        arr2=arr.join("");
        console.log(arr2);
        }
    }
}
