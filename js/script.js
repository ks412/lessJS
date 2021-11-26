/************************************lesson_1************************************/
/**************************************77 A)*************************************/

{
    function exp(n){
        let  result = 2 ** n;
        return result;
    }


    let n = Number(prompt("Enter 'n' namber"));
        console.log(exp(n));
}

/***************************************77 Б)*************************************/

{
    function factofi(n){
        let factorial = 1;

            for (i = 0; i < n; i++){
            factorial = factorial * (n - i);
            }

            return factorial;

    }

    let n = Number(prompt("Enter 'n' namber"));
        console.log(factofi(n));

}
/**************************************77 B)*************************************/

{
//debugger


    function sum(n) {
        let Nam2 = 1;
        for (let i = 1; i <= n; i++) {
            let result;
            let nam = i;
            nam *= nam;
            result = 1 + (1 / nam);
            Nam2 = Nam2 * result;
    
        if (i == n) {
            return result;
        }
        }
    }
    let n = Number(prompt("Enter 'n' namber"));
        console.log(sum(n));

}
/**************************************77 Г)*************************************/

{
//debugger

    function SumSin(n){
        let sinN = 0;
        let sumSin = 0;
        for (i = 1; i <= n; i++){
            sinN = sinN + Math.sin(i);
            sumSin = sumSin + (1/Math.sin(i));

        if (i == n) {
            return sumSin;
        }

        }
    }
    let n = Number(prompt("Enter 'n' namber"));
        console.log(SumSin(n));


}
