/***********************************************802**********************************/

//debugger

{
function num(n){
     
    let firstN = 0;
    let result = 0;
   conf: for (let i = 0; i < n.length; i++){
        let b = 0;
    if ( b = Number(n[i]) && b !== NaN) {
        firstN++;
        continue conf;
        
        
    } 
    if (firstN <= result) {
        firstN = 0;
    }
    
    else if (firstN > result){
        result = firstN;
        result = result;
        firstN -= firstN;
    }
        return result;
    }
}
let n = prompt("Enter text", '123456789q12q123q12q1234567q123q12345678');
console.log(num(n));
}

/******************************************803 (неработает) ********************************/
/*
    debugger
        let n = prompt("Enter text", 'qs');
        //let spase = 0;
        //let liter = 0;
        //let other = 0;
    
        
        
    
       
            if (/[a-zA-Z' '] + $/.test(n))  {
                console.log(true)
            } else {
                console.log(false)
            }
            
    
            
        
        
        
    
        }

*/