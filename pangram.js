function processData(input) {
   
    //console.log(input);
    //console.log(input.length);
    counta = 0; 
    countb =0;
    countc = 0; countd = 0; counte=0; countf = 0; countg = 0; counth =0; counti =0; countj=0; countk=0; countl=0; countm=0;       countn=0; counto=0; countp=0; countq=0; countr=0; counts=0; countt=0; countu=0; countv=0; countw=0; countx=0; county=0; countz=0; 
    for (i=0; i<input.length; i++){
        if (input.charAt(i) == "a") {
            counta = counta+1;
        }
           else if (input.charAt(i) == "a"|| input.charAt(i) == "A") {
            counta = counta+1;
        }
        else if (input.charAt(i) == "b"|| input.charAt(i) == "B") {
            countb = countb+1;
        }
            else if (input.charAt(i) == "c" || input.charAt(i) == "C") {
            countc = countc+1;
        }
            else if (input.charAt(i) == "d" || input.charAt(i) == "D") {
            countd = countd+1;
        }
            else if (input.charAt(i) == "e" || input.charAt(i) == "E") {
            counte = counte+1;
        }
            else if (input.charAt(i) == "f" || input.charAt(i) == "F") {
            countf = countf+1;
        }
            else if (input.charAt(i) == "g" || input.charAt(i) == "G") {
            countg = countg+1;
        }
            else if (input.charAt(i) == "h" || input.charAt(i) == "H") {
            counth = counth+1;
        }
            else if (input.charAt(i) == "i" || input.charAt(i) == "I") {
            counti = counti+1;
        }
            else if (input.charAt(i) == "j"|| input.charAt(i) == "J") {
            countj = countj+1;
        }
            else if (input.charAt(i) == "k" || input.charAt(i) == "K") {
            countk = countk+1;
        }
            else if (input.charAt(i) == "l" || input.charAt(i) == "L") {
            countl = countl+1;
        }
            else if (input.charAt(i) == "m" || input.charAt(i) == "M") {
            countm = countm+1;
        }    else if (input.charAt(i) == "n" || input.charAt(i) == "N") {
            countn = countn+1;
        }
            else if (input.charAt(i) == "o" || input.charAt(i) == "O") {
            counto = counto+1;
        }
            else if (input.charAt(i) == "p" || input.charAt(i) == "P") {
            countp = countp+1;
        }
            else if (input.charAt(i) == "q" || input.charAt(i) == "Q") {
            countq = countq+1;
        }
            else if (input.charAt(i) == "r" || input.charAt(i) == "R") {
            countr = countr+1;
        }
            else if (input.charAt(i) == "s" || input.charAt(i) == "S") {
            counts = counts+1;
        }
            else if (input.charAt(i) == "t" || input.charAt(i) == "T") {
            countt = countt+1;
        }
            else if (input.charAt(i) == "u" || input.charAt(i) == "U") {
            countu = countu+1;
        }
            else if (input.charAt(i) == "v" || input.charAt(i) == "V") {
            countv = countv+1;
        }
            else if (input.charAt(i) == "w" || input.charAt(i) == "W") {
            countw = countw+1;
        }
            else if (input.charAt(i) == "x" || input.charAt(i) == "X") {
            countx = countx+1;
        }
            else if (input.charAt(i) == "y" || input.charAt(i) == "Y") {
            county = county+1;
        }
            else if (input.charAt(i) == "z" || input.charAt(i) == "Z") {
            countz = countz+1;
        }
            else  {
            
        }
        
    }
    
   // console.log(countw);
    
    if (counta>0 && countb>0 && countc>0 && countd>0 && counte>0 && countf>0 && countg>0 && counth>0 && counti>0 && countj>0 && countk>0 && countl>0 && countm>0 && countn>0 && counto>0 && countp>0 && countq>0 && countr>0 && counts>0 && countt>0 && countu>0 && countv>0 && countw>0 && countx>0 && county>0 && countz>0){
        console.log("pangram");
    }
    else{
        console.log("not pangram");
    }
    
} 
        

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
